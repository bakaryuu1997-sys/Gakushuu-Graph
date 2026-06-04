#!/usr/bin/env bash
set -euo pipefail
npx vitest run --pool=vmThreads --maxWorkers=1 --fileParallelism=false --reporter=dot
