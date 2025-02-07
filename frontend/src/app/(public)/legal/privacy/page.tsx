import { getLocale } from "next-intl/server"

import EnPrivacy from "./contents/en.privacy.mdx"
import ZhPrivacy from "./contents/zh.privacy.mdx"

export default async function Privacy() {
    const locale = await getLocale()
    
    return (
        locale === "zh" ? <ZhPrivacy /> : <EnPrivacy />
    )
}