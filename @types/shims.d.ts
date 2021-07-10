declare namespace Express {
  interface Response {
    /**
     * Sends a 404 error code along with the given content
     *
     * @param message - The content to send in the response
     */
    not_found: (message?: string) => void
  }
}
