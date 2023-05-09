import axios from "axios";
import "./App.css";
import { CountryType } from "./types";
import { useEffect, useState } from "react";
import Country from "./components/Country";

// ctrl + . otomatik import
// ctrl + space data nın içerisinde ne oludğunu gösterir

function App() {
  const [countries, setCountries] = useState<CountryType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  // burada axiois ile apiden veri almayı görüyıru
  const getCountries = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get<CountryType[]>(
        "https://restcountries.com/v3.1/all"
      );
      setCountries(data);
    } catch {
      console.log("ulkeler al,rken bir hata olurstu");
    } finally {
      setLoading(false);
    }
  };

  //uygulamaını ne zaman çalışacağını belirtmek için kullanıyoruz
  //uygulamamız lk yüklendiğinde
  useEffect(() => {
    getCountries();
  }, []);

  console.log({ countries });
  return (
    <div>
      {loading
        ? "loading..."
        : countries.map((country) => {
            return (
              <div>
                <Country key={country.flag} country={country} />
              </div>
            );
          })}
    </div>
  );
}

export default App;
function useStates(arg0: never[]): [any, any] {
  throw new Error("Function not implemented.");
}
