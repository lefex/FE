# 疑问

这是啥写法

```ts
const CONNECT_STATUS_UPDATING = 1 as const;
const CONNECT_STATUS_UPDATED = 2 as const;
type ConnectStatus =
    typeof CONNECT_STATUS_PENDING
    | typeof CONNECT_STATUS_UPDATING
    | typeof CONNECT_STATUS_UPDATED;
```

```ts
const PENDING_UPDATE = '__pendingUpdate' as const;
private [IN_MAIN_PROCESS_KEY]: boolean;
```