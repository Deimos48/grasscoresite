import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import HomePage from '../components/home/HomePage'
import { setModalAction } from '../store/actions/root.actions'

export default function Home() {
  const dispatch = useDispatch()
  const isModal = useSelector((state) => state.root.isModal)

  const setModal = (isModal) => dispatch(setModalAction(isModal))

  return (
    <HomePage isModal={isModal} setModal={setModal} />
  )
}
