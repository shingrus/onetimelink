# 1time CLI

Minimal command-line client for `1time.io`.

## Status

This is `v0`.

Current scope:

- `send` creates a one-time link
- `read` fetches and decrypts a one-time link
- no passphrase support
- no custom expiry support

## Install

From the repo root:

```bash
npm install -g .
```

After publish:

```bash
npm install -g @1time/cli
```

## Commands

### `1time send`

Create a one-time link.

Input precedence:

1. piped `stdin`
2. `1TIME_SECRET`
3. `--secret`

Examples:

```bash
printf 'hello' | 1time send
```

```bash
1TIME_SECRET='hello' 1time send
```

```bash
1time send --secret 'hello'
```

Use a custom host:

```bash
printf 'hello' | 1time send --host 1time.io
printf 'hello' | 1time send --host https://1time.io
printf 'hello' | 1time send --host http://127.0.0.1:8080
```

### `1time read <link>`

Read and decrypt a one-time link.

Examples:

```bash
1time read 'https://1time.io/v/#...'
```

```bash
1time read --host http://127.0.0.1:8080 'http://127.0.0.1:8080/v/#...'
```

## Flags

- `--host <host-or-origin>`
- `--secret <secret>`
- `-h`, `--help`

## Host Rules

- default host is `1time.io`
- bare hosts like `1time.io` are treated as `https://1time.io`
- `https://...` is accepted
- `http://...` is rejected except for loopback hosts such as `127.0.0.1`

## Security Notes

- `--secret` is supported for convenience, but it is insecure. Command-line arguments can leak through shell history and process listings.
- `1time read <link>` also places the full secret link in command history and process listings. In the current protocol, the URL fragment contains the decryption material.
- Prefer `stdin` for `send`.

## Development

Run directly from the repo root:

```bash
node cli/index.mjs --help
printf 'hello' | node cli/index.mjs send
node cli/index.mjs read 'https://1time.io/v/#...'
```

Run tests:

```bash
node --test cli/*.test.mjs
```
