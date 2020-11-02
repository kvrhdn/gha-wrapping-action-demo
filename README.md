# Wrapping action demo

This repository is an accompaniment to my blogpost [_Creating a wrapping action on GitHub Actions_](https://kvrhdn.dev/blog/creating-a-wrapping-action-on-github-actions/).

## Getting started

Build the code before checking it in, GitHub Actions will not look at `src/` and will only run `dist/index.js`:

```shell
npm run all
```

The code that is executed can be found in [`src/index.ts`](src/index.ts). The GitHub Actions runtime is configured by [`action.yaml`](action.yaml).

## License

This Action is distributed under the terms of the MIT license, see [LICENSE](./LICENSE) for details.
