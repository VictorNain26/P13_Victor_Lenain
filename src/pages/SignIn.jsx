import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userLogin } from '../features/user/userActions'
import Error from '../components/error'

function SignIn() {
  const { loading, userInfo, error } = useSelector((state) => state.user)
  const dispatch = useDispatch()
  const { register, handleSubmit } = useForm()
  const navigate = useNavigate()

  useEffect(() => {
    if (userInfo) {
      navigate('/profile')
    }
  }, [navigate, userInfo])

  const submitForm = (data) => {
    dispatch(userLogin(data))
  }

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>

        <h1>Sign In</h1>

        <form onSubmit={handleSubmit(submitForm)}>
          {error && <Error>{error}</Error>}

          <div className="input-wrapper">
            <label htmlFor="email">email</label>

            <input
              type="email"
              {...register('email')}
              required
            />
          </div>

          <div className="input-wrapper">
            <label htmlFor="password">Password</label>

            <input
              type='password'
              {...register('password')}
              required
            />
          </div>

          <div className="input-remember">
            <input type="checkbox" id="remember-me" />

            <label htmlFor="remember-me">Remember me</label>
          </div>

          <button type='submit' className="sign-in-button" disabled={loading}>
            Sign In
          </button>
        </form>
      </section>
    </main>
  );
}

export default SignIn;
