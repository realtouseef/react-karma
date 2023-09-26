## react-karma 😵‍💫

Decreases the opacity by .1 each day until it reaches 0

### How to use it

Wrap the root with Karma with optional flags, such as:

- color: string -- defaults to white (optional)
- hours: number -- defaults to 6 hours (optional)
- decreaseBy: number (float) -- decrease the opacity by -- defaults to 0.1 (optional)
- children: ReactNode

> if you don't provide an hours flag, it will default to 6 hours, meaning that the function will validate every 6 hours if the day has changed and will decrease the opacity.

```jsx
<React.StrictMode>
  <Karma color='pink' hours={7} decreaseBy={0.3}>
    <App />
  </Karma>
</React.StrictMode>
```

### How it works

The Karma component basically creates a mask on top of everything with `pointer-events: none`
