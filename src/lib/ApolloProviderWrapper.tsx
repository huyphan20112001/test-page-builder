'use client'
import { apolloClient } from "@/lib/apolloClient"
import { ApolloProvider } from "@apollo/client"

const ApolloProviderWrapper = ({children}: {children: React.ReactNode} ) => {
    return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>
}

export default ApolloProviderWrapper