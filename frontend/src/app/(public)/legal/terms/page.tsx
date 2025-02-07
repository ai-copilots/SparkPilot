import { getLocale } from "next-intl/server"

import EnTerms from "./contents/en.terms.mdx"
import ZhTerms from "./contents/zh.terms.mdx"

export default async function Terms() {
    const locale = await getLocale()
    
    return (
        locale === "zh" ? <ZhTerms /> : <EnTerms />
    )
}