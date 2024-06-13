## EarthAlly (Atividade Extensionista - Uninter)

### Visão Geral
EarthAlly é um protótipo de aplicativo web projetado para apoiar atividades de conscientização ambiental como parte de um projeto de extensão universitária. O aplicativo permite que os usuários façam login, criem e gerenciem marcadores no mapa com descrições detalhadas para destacar problemas ambientais ou áreas de interesse. Atualmente, o aplicativo usa armazenamento de dados em memória via localStorage e está projetado para futuras expansões para integração com sistemas backend como .NET, Spring ou Django.

### Funcionalidades
- Autenticação de Usuário: Usuários podem fazer login com credenciais predefinidas.
- Mapa Interativo: Utiliza Leaflet e Leaflet Draw para criação e gerenciamento de marcadores no mapa.
- Integração com Sweet Alert: Coleta de detalhes dos marcadores através de popups amigáveis.
- Gerenciamento de Marcadores: Usuários podem criar, visualizar e deletar marcadores com descrições.
- Armazenamento Local: Armazena dados dos marcadores no armazenamento local do navegador.

### Tecnologias Utilizadas
Frontend:  
- HTML5, CSS3, JavaScript
- Bootstrap 4.5 para design responsivo
- Leaflet para mapas interativos
- Leaflet Draw para criação de marcadores
- SweetAlert2 para prompts de entrada de usuário aprimorados  
Backend (possibilidades para futura integração):  
- .NET
- Spring
- Django
### Estrutura do Projeto
root
│   README.md
│   index.html
│   app.html
│   style.css
│   main.js  

- index.html
Página de login onde os usuários podem se autenticar para acessar o aplicativo principal.

- app.html
Página principal do aplicativo, apresentando um mapa interativo onde os usuários podem criar e gerenciar marcadores.

- style.css
Estilos personalizados para melhorar o apelo visual do aplicativo.

- main.js
Contém a lógica principal em JavaScript para autenticação de usuário, gerenciamento de marcadores e interações com o armazenamento local.

### Instalação
- Clone o repositório:
> git clone https://github.com/seuusuario/EarthAlly.git
Navegue até o diretório do projeto:
> cd EarthAlly
Abra o index.html no seu navegador preferido:
> open index.html

### Uso
Login:
- Use uma das credenciais de usuário predefinidas para fazer login (por exemplo, username: admin, password: admin).
Interação com o Mapa:  
- Após um login bem-sucedido, você poderá criar e gerenciar marcadores no mapa interativo.

### Exemplos
Tela de login
![image](https://github.com/tiagocustodio86/EarthAllyAtvExt/assets/172204996/200fa8aa-f1fb-42b7-9c39-6fc2c5b89f9f)
Criação de marcador no mapa (o usuário pode excluir somente o seu próprio marcador)  
![image](https://github.com/tiagocustodio86/EarthAllyAtvExt/assets/172204996/bed04f14-16a5-4745-9fef-dbb20890a9f6)
Consulta de marcação de outros usuários  
![image](https://github.com/tiagocustodio86/EarthAllyAtvExt/assets/172204996/06545421-d1cb-423f-a430-155f31997fce)
Criação de polígonos pra marcar áreas maiores
![image](https://github.com/tiagocustodio86/EarthAllyAtvExt/assets/172204996/725d3e75-a4b1-4a38-a7ba-a256dffb56e6)



