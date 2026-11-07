# FAQ

## How do I run a script for every page?
Add it to `assets/js/custom.js`, then run `pnpm build`.

## How do I add a new script?
Put the script in `assets/js/lib/`, then run `pnpm build`.

## How do I add a new CSS file?
1. Put the file in `assets/css/`.
2. Add an `@import` line at the top of `assets/css/screen.css`, next to the other imports.
3. Run `pnpm build`.

## How do I compile the scripts and styles?
Run `pnpm install` once, then `pnpm build`. Commit the files in `assets/built/` too.

## How do I add a new single style?
Add it to the custom sections at the end of `assets/css/screen.css`. Use the same selector as the upstream rule that you change. Do not edit upstream rules in place, because that causes merge conflicts. Run `pnpm build`.

## How do I modify routes?
1. Modify `routes.yaml`.
2. Upload it in Ghost Admin: Settings → Labs → Routes.

## How do I update from the main repo?
1. Run `git fetch upstream`.
2. Run `git merge --no-commit upstream/main`.
3. Fix the conflicts, then run `pnpm build` and `pnpm exec gscan .`.
4. Commit and push.
