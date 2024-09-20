export const handleError = (error: unknown, action: string) => {
    if (error instanceof Error) {
        throw new Error(`Error while ${action}: ${error.message}`)
    }
    throw new Error(`An unknown error occurred while ${action}.`)
}
