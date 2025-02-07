import { validateNeo4jConfig } from '@/config/neo4j'
import { initNeo4jDriver } from './index'

let isInitialized = false

export async function initializeNeo4j() {
    if (isInitialized) return

    if (!process.env.NEO4J_URI || !process.env.NEO4J_USERNAME || !process.env.NEO4J_PASSWORD) {
        throw new Error('Missing Neo4j environment variables')
    }

    const config = validateNeo4jConfig(process.env)
    await initNeo4jDriver(config)
    isInitialized = true
} 