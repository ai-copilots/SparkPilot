import { DefaultSession } from "next-auth"

declare module "next-auth" {
    /**
     * User节点的类型定义
     * 对应Neo4j约束: CREATE CONSTRAINT ON (u:User) REQUIRE u.id IS UNIQUE
     */
    interface User {
        id: string           // 唯一约束
        email: string        // 索引字段
        emailVerified?: Date | null
        name?: string | null
        image?: string | null
    }

    /**
     * Account节点的类型定义
     * 对应Neo4j约束: CREATE CONSTRAINT ON (a:Account) REQUIRE (a.provider, a.providerAccountId) IS NODE KEY
     */
    interface Account {
        provider: string         // 复合键的一部分
        providerAccountId: string // 复合键的一部分
        type: string
        access_token?: string
        expires_at?: number
        refresh_token?: string
        scope?: string
        token_type?: string
        id_token?: string
        session_state?: string
    }
   
    /**
     * Session节点的类型定义
     * 对应Neo4j约束: CREATE CONSTRAINT ON (s:Session) REQUIRE s.sessionToken IS UNIQUE
     */
    interface Session {
        sessionToken: string  // 唯一约束
        expires: Date
        user: {
            id: string
        } & DefaultSession["user"]
    }

    /**
     * VerificationToken节点的类型定义
     * 对应Neo4j约束: CREATE CONSTRAINT ON (v:VerificationToken) REQUIRE (v.identifier, v.token) IS NODE KEY
     */
    interface VerificationToken {
        identifier: string   // 复合键的一部分
        token: string       // 复合键的一部分
        expires: Date
    }
}