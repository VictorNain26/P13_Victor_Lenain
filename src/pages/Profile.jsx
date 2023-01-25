import { useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { editUser } from '../features/user/userActions'

function User() {
  const { loading, userInfo } = useSelector((state) => state.user)
  const { register, handleSubmit } = useForm()
  const dispatch = useDispatch()

  console.log(userInfo);

  const submitForm = (data) => {
    dispatch(editUser(data))
  }

  return (
    <main className="main bg-dark">
      <div className="header">
        <h1>Welcome back<br />{userInfo ? `${userInfo.body.firstName} ${userInfo.body.lastName}` : ""}</h1>

        <form className="input-wrapper-form" onSubmit={handleSubmit(submitForm)}>
          <div className="input-wrapper-container">
            <div className="input-wrapper">
              <label htmlFor="firstName">firstname</label>

              <input
                type="firstname"
                {...register('firstName')}
                required
              />
            </div>

            <div className="input-wrapper">
              <label htmlFor="lastName">lastname</label>

              <input
                type='lastname'
                {...register('lastName')}
                required
              />
            </div>
          </div>

          <button type='submit' className="edit-button" disabled={loading}>Edit Name</button>
        </form>

      </div>

      <h2 className="sr-only">Accounts</h2>

      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Checking (x8349)</h3>

          <p className="account-amount">$2,082.79</p>

          <p className="account-amount-description">Available Balance</p>
        </div>

        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>

      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Savings (x6712)</h3>

          <p className="account-amount">$10,928.42</p>

          <p className="account-amount-description">Available Balance</p>
        </div>

        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>

      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>

          <p className="account-amount">$184.30</p>

          <p className="account-amount-description">Current Balance</p>
        </div>

        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
    </main>
  );
}

export default User;
