# Troubleshooting

## Search returns no results

Possible reasons:

- repository indexing is not ready yet
- branch content was added only recently
- the query is too specific

## Pull request creation blocked

Possible reason:

- the platform safety layer blocked the request before GitHub executed it

## Branch comparison works but search does not

This can happen when commit metadata is available immediately, while full code search lags behind.

## Suggested checks

- verify the branch exists
- compare `main` vs feature branch
- fetch files directly when search is empty
