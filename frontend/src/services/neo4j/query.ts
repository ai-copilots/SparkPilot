import { getDriver } from './index'
import type { QueryResult, Node, Relationship, Path, Integer, Record as Neo4jRecord } from 'neo4j-driver'

/**
 * Neo4j 查询参数类型
 */
type Neo4jValue = string | number | boolean | null | Neo4jValue[] | { [key: string]: Neo4jValue }

/**
 * Neo4j 查询结果类型
 */
type Neo4jResult = {
    [key: string]: Node | Relationship | Path | Neo4jValue | Integer
}

/**
 * 执行 Neo4j 查询
 * @param cypher - Cypher 查询语句
 * @param params - 查询参数
 * @returns 查询结果
 */
export async function executeQuery<T extends Neo4jResult = Neo4jResult>(
    cypher: string,
    params: Record<string, Neo4jValue> = {}
): Promise<T[]> {
    const driver = getDriver()
    const session = driver.session()

    try {
        const result: QueryResult = await session.run(cypher, params)
        return result.records.map((record: Neo4jRecord) => record.toObject() as T)
    } finally {
        await session.close()
    }
}

/**
 * 执行只读查询
 */
export async function executeRead<T extends Neo4jResult = Neo4jResult>(
    cypher: string,
    params: Record<string, Neo4jValue> = {}
): Promise<T[]> {
    const driver = getDriver()
    const session = driver.session({ defaultAccessMode: 'READ' })

    try {
        const result = await session.run(cypher, params)
        return result.records.map((record: Neo4jRecord) => record.toObject() as T)
    } finally {
        await session.close()
    }
}

/**
 * 执行写入查询
 */
export async function executeWrite<T extends Neo4jResult = Neo4jResult>(
    cypher: string,
    params: Record<string, Neo4jValue> = {}
): Promise<T[]> {
    const driver = getDriver()
    const session = driver.session({ defaultAccessMode: 'WRITE' })

    try {
        const result = await session.run(cypher, params)
        return result.records.map((record: Neo4jRecord) => record.toObject() as T)
    } finally {
        await session.close()
    }
} 