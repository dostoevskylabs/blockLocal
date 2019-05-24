## PoC for how to overload JavaScript native function prototypes to block malicious requests

Currently, it only blocks fetch (and probably not in every situation).

## Todo
- Adaptively block based on changing parameters
- Block XMLHttpRequest
- Block WebSocket requests
- Add full local IP range to the blacklist
- Ensure it always runs before website's javascript
