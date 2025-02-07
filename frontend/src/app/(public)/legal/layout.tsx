


export default async function LegalLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="prose dark:prose-invert max-w-none md:max-w-3xl lg:max-w-4xl mx-auto">
                {children}
            </div>
        </div>
    )
  }