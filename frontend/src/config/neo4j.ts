import { z } from 'zod'

/**
 * Neo4j 配置类型
 */
export type Neo4jConfigType = {
    uri: string
    username: string
    password: string
}

/**
 * Neo4j 配置模式定义
 */
export const neo4jConfigSchema = z.object({
    NEO4J_URI: z.string().url('无效的 Neo4j URI'),
    NEO4J_USERNAME: z.string().min(1, '用户名不能为空'),
    NEO4J_PASSWORD: z.string().min(1, '密码不能为空'),
})

/**
 * 验证 Neo4j 配置
 * @param config - Neo4j 配置或环境变量
 * @returns 验证后的 Neo4j 配置
 */
export function validateNeo4jConfig(config: Partial<Neo4jConfigType> | Record<string, string | undefined>): Neo4jConfigType {
    // 处理环境变量格式
    if ('NEO4J_URI' in config) {
        const envConfig = neo4jConfigSchema.parse(config)
        return {
            uri: envConfig.NEO4J_URI,
            username: envConfig.NEO4J_USERNAME,
            password: envConfig.NEO4J_PASSWORD,
        }
    }
    
    // 处理直接配置格式
    if (!config.uri || !config.username || !config.password) {
        throw new Error('Missing required Neo4j configuration')
    }
    
    return config as Neo4jConfigType
} 