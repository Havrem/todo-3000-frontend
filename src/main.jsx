import { StrictMode } from 'react'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { AuthProvider } from './hooks/useAuth.jsx'

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
    <StrictMode>
      <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <AuthProvider>
              <App/>
            </AuthProvider>
          </BrowserRouter>
        </QueryClientProvider>
    </StrictMode>
)