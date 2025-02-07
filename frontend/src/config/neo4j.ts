import { z } from 'zod'

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
 * @param env - 环境变量记录
 * @returns 验证后的 Neo4j 配置
 */
export function validateNeo4jConfig(env: Record<string, string | undefined>) {
    const config = {
        NEO4J_URI: env.NEO4J_URI,
        NEO4J_USERNAME: env.NEO4J_USERNAME,
        NEO4J_PASSWORD: env.NEO4J_PASSWORD,
    }

    return neo4jConfigSchema.parse(config)
}

/**
 * Neo4j 配置类型
 */
export type Neo4jConfigType = z.infer<typeof neo4jConfigSchema> 