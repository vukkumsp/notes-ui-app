import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Note from '../../components/note/Note';
import './NoteView.css'

function NoteView({ note, index }) {

  return (
    <>
        <Header />
        <Note key={index} note={note} />
        <Footer />
    </>
  )
}

export default NoteView
