import { Karma } from './component';

export default function App() {
  return (
    <Karma color='pink'>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
        }}
      >
        <div
          style={{
            background: 'black',
            width: '10rem',
            height: '10rem',
            borderRadius: '5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <p
            style={{
              color: 'white',
              fontSize: '2rem',
              fontFamily: 'sans-serif',
            }}
          >
            hellow
          </p>
        </div>
      </div>
    </Karma>
  );
}
