import {FaArrowLeft} from 'react-icons/fa'
import DetailsOfUser from '../DetailsOfUser'
import './index.css'

const HomePage = props => {
  const {detList, loginList, location, timer} = props
  const {imgUrl, qrUrl, code} = detList
  const {nameInp} = loginList

  return (
    <div className="home-cont">
      <FaArrowLeft
        style={{
          color: 'black',
          fontSize: '20px',
          alignSelf: 'flex-start',
        }}
      />
      <img src={imgUrl} className="img" alt={nameInp} />
      <div className="card-containers">
        <p className="pp1"> {nameInp} </p>
        <img src={qrUrl} className="img" alt={nameInp} />
        <p className="pp2"> User Code </p>
        <button type="button" className="code-but">
          {code}
        </button>
      </div>
      <div className="container-list">
        <h1 className="heads"> Entry Log </h1>
        <div>
          <ul className="cont-lis">
            {loginList.map(eachUser => (
              <DetailsOfUser
                info={eachUser.nameInp}
                key={eachUser.id}
                add={location}
                timeDet={timer}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default HomePage
