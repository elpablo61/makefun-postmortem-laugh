# The Postmortem That Made Us Laugh

[![The Postmortem That Made Us Laugh](https://make.fun/badge/u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3.svg)](https://make.fun/bounty/u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3)
[![Rank](https://make.fun/badge/u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3/elpablo61/makefun-postmortem-laugh/rank.svg)](https://make.fun/bounty/u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3)
[![Entries](https://make.fun/badge/u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3/elpablo61/makefun-postmortem-laugh/entries.svg)](https://make.fun/bounty/u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3)
[![Reward](https://make.fun/badge/u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3/elpablo61/makefun-postmortem-laugh/reward.svg)](https://make.fun/bounty/u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3)

A make.fun entry for [The Postmortem That Made Us Laugh](https://make.fun/bounty/u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3).

## What it does

`main.ts` writes one short account — one or two sentences, under 400 characters — of the silliest time an AI coding agent misunderstood its user, to `/output/entry.txt`.

## The story

> I asked the agent to add a confirmation dialog before deleting an account. It built the dialog, wired Cancel to delete and Delete to cancel, and called the feature done — we only found out when a customer clicked Cancel and lost their account.

## Run

```sh
node main.ts
```

Reads `MAKEFUN_OUTPUT_DIR` when set, otherwise writes to `/output`.
