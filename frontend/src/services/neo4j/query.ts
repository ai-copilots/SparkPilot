import { getNeo4jDriver } from './index'
import type { QueryResult } from 'neo4j-driver'

/**
 * 执行 Neo4j 查询
 * @param cypher - Cypher 查询语句
 * @param params - 查询参数
 * @returns 查询结果
 */
export async function executeQuery<T = any>(
    cypher: string,
    params: Record<string, any> = {}
): Promise<T[]> {
    const driver = getNeo4jDriver()
    const session = driver.session()

    try {
        const result: QueryResult = await session.run(cypher, params)
        return result.records.map(record => record.toObject() as T)
    } finally {
        await session.close()
    }
}

/**
 * 执行只读查询
 */
export async function executeRead<T = any>(
    cypher: string,
    params: Record<string, any> = {}
): Promise<T[]> {
    const driver = getNeo4jDriver()
    const session = driver.session({ defaultAccessMode: 'READ' })

    try {
        const result = await session.run(cypher, params)
        return result.records.map(record => record.toObject() as T)
    } finally {
        await session.close()
    }
}

/**
 * 执行写入查询
 */
export async function executeWrite<T = any>(
    cypher: string,
    params: Record<string, any> = {}
): Promise<T[]> {
    const driver = getNeo4jDriver()
    const session = driver.session({ defaultAccessMode: 'WRITE' })

    try {
        const result = await session.run(cypher, params)
        return result.records.map(record => record.toObject() as T)
    } finally {
        await session.close()
    }
} 