interface DataProps{
  id: number;
  name: string;
  full_name: string;
  owner:{
    login: string;
    id: number;
    avatar_url: string;
    url: string;
  }
}

async function delayFetch(url: string, delay: number){
  await new Promise(resolve => setTimeout(resolve, delay))
  const response = await fetch(url);
  return response.json();
}

//dados direto do lado do servidor, sem precisar usar o useEffect
async function getData(){
  const data = await delayFetch("https://api.github.com/users/devfraga/repos", 3500);

  return data;
}

export default async function Home(){
  const data: DataProps[] = await getData();

  return(
    <main>
      <h1>Página home</h1>
      <span>Seja bem vindo a página home</span>
      <br />

      <h3>Meus Reopositórios</h3>
      {data.map((item) => (
        <div key={item.id}>
          <strong>Repositório: </strong> <a>{item.name}</a>
        </div>
      ))}
    </main>
  )
}