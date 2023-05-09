type IProps = {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
};

const input: React.FC<IProps> = ({ todo, setTodo }) => {
  // buradaki fonc unda ":React.FC" olarak belirliyoruz
  //":React.FC" içerisinde type ları belirlemek için ise <IProps>  ifadeyi kullanıyoruz
  return (
    <div>
      <input placeholder="yazınız"></input>
      <button>Ekle</button>
    </div>
  );
};

export default input;
