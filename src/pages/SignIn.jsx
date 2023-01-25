import { useForm } from 'react-hook-form'

function SignIn() {
  const { register, handleSubmit } = useForm()

  const submitForm = (data) => {
    console.log(data.email)
  }

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>

        <h1>Sign In</h1>

        <form onSubmit={handleSubmit(submitForm)}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>

            <input
              type="text"
              {...register('username')}
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

            <label for="remember-me">Remember me</label>
          </div>

          <button type='submit' className="sign-in-button">Sign In</button>
        </form>
      </section>
    </main>
  );
}

export default SignIn;
