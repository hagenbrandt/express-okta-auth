declare module '@okta/okta-react' {
  function Security({
    children,
    issuer,
    client_id,
    redirect_uri,
    onAuthRequired,
  }: {
    children: any
    issuer: string
    client_id: string
    redirect_uri: string
    onAuthRequired: ({ history }: { history: any }) => void
  }): JSX.Element
  namespace Security {}

  function withAuth(): void
  namespace withAuth {}
  export { withAuth, Security }
}
declare module '@okta/okta-auth-js' {}
