import neo4j, { Driver } from 'neo4j-driver'
import { validateNeo4jConfig, type Neo4jConfigType } from '@/config/neo4j'
import { headers } from 'next/headers'

// 使用 Symbol 确保全局单例
const globalForNeo4j = globalThis as unknown as {
    neo4j: { driver: Driver | null }
}

/**
 * 初始化 Neo4j 驱动
 * @param config - Neo4j 配置
 * @returns Neo4j 驱动实例
 */
export async function initNeo4jDriver(config: Neo4jConfigType): Promise<Driver> {
    // 在服务器端复用已存在的连接
    if (globalForNeo4j.neo4j?.driver) {
        return globalForNeo4j.neo4j.driver
    }

    try {
        const driver = neo4j.driver(
            config.uri,
            neo4j.auth.basic(config.username, config.password),
            {
                // 生产环境下的最大连接池大小
                maxConnectionPoolSize: process.env.NODE_ENV === 'production' ? 50 : 10,
                // 连接获取超时时间
                connectionAcquisitionTimeout: 2 * 60 * 1000, // 2 minutes
            }
        )

        // 验证连接
        await driver.getServerInfo()
        
        // 保存到全局
        globalForNeo4j.neo4j = { driver }
        
        return driver
    } catch (error) {
        console.error('Neo4j 连接失败:', error)
        throw error
    }
}

/**
 * 关闭 Neo4j 驱动连接
 */
export async function closeNeo4jDriver(): Promise<void> {
    if (globalForNeo4j.neo4j?.driver) {
        await globalForNeo4j.neo4j.driver.close()
        globalForNeo4j.neo4j.driver = null
    }
}

/**
 * 获取 Neo4j 驱动实例
 * @returns Neo4j 驱动实例
 */
export function getDriver(): Driver {
    if (!globalForNeo4j.neo4j) {
        globalForNeo4j.neo4j = { driver: null }
    }

    if (!globalForNeo4j.neo4j.driver) {
        const config = validateNeo4jConfig(process.env)

        globalForNeo4j.neo4j.driver = neo4j.driver(
            config.uri,
            neo4j.auth.basic(config.username, config.password)
        )
    }

    return globalForNeo4j.neo4j.driver
}

// 导出验证函数以便复用
export { validateNeo4jConfig } 