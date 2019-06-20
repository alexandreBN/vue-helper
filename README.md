# CLI
    Auxilia o desenvolvedor a configurar o ambiente
        $ npm install vue-cli@2.7.0 -g
        $ vue --version

# Inicializando um novo projeto
    $ vue init webpack-simple vue-project
        webpack-simpe: template (simples) utilizado para SPA
        vue-project: nome do projeto

    Assim que for feito a criação do projetoé necessário entrar no diretório do mesmo e atualizar os pacotes
        $ npm install
    
    Iniciar o projeto
        $ npm run dev


# Arquivo build.js
    Esse arquivo contém todo o conteúdo do diretório 'src' da aplicação.
    Ele é criado em tempo de desenvolvimento na memória com base nos arquivos 'src'
        Isso faz com que o desenvolvimento seja 'otimizado', pois é basicamente ele faz um Hot-Deploy/Live-Reloading

# Arquivo Package.json
    Babel: transpiler (converte o código escrito em ES6 para ES5)
    Webpack: module bundler (responsável pelo empacotamento e hot-deploy da app)

# Arquivo App.vue
    É considerado um Single File Template (Template de Unico Arquivo). Além disso, é considerado um Módulo que possui a declaração do componente 'app'
        Componente APP
            Template: apresentação do componente
            Script: definição do código javascript e dados utilizados
                função data()
                    Também chamada de fonte de dados.
                    Fornece todos os dados que o componente precisa
            Style: css

# Arquivo main.js
    Global View Object: auxilia na criação de Vue Instances
        - Vue Instance: cola entre o componente e a Vue
    
    el: "#app" -> onde será renderizado o componente
    render: h => h(App) -> qual compoente eu quero renderizar (App)


# Data Binding Unidirecional
    O valor do dado sempre flui da função data() para o template e nunca ao contrário.

# Exigências do Vue
    Necessita que dentro do template os elementos (h1, etc..) devem estar dentro de uma container (div, etc...).
    Dentro de atributos a interpolação é vetada, isto é, não funciona
        Errado:
            <img src="{{ foto.url }} " titulo="{{ foto.titulo }}" />

        Correto:
            <img v-bind:src="foto.url" v-bind:alt="foto.titulo" />

        Correto com uma sintaxe inxuta:
            <img :src="foto.url" :alt="foto.titulo" />

# Diretivas
    v-for

        <ul>
			<li v-for="foto in fotos" :key="foto">
				<img :src="foto.url" :title="foto.titulo">
			</li>
		</ul>

        data() {
			return {
				fotos: [
					{
						url: 'https://www.petz.com.br/blog/wp-content/uploads/2017/02/como-treinar-cachorro-03.jpg',
						titulo: 'Doguinho maneiro'
					},
					{
						url: 'http://data.biovet.com.br/file/2018/10/29/H104520-F00000-V006-2000x0.jpeg',
						titulo: 'Dominho feliz'
					},
				]
			}
		}

    v-show
        Apresenta ou não um determinado elemento (adiciona um display none se o valor for false)
        Observação: isso não pode ser aplicado em um slot. Para isso pode ser criado uma div externa e adicionado nessa.

    Observação:
        Ao invés de se utilizar 'v-on' no 'v-on:click' é possível utilizar o '@', ficando '@click' 

# Modulo para baixar requisições
    $ npm install vue-resource@1.0.3 --save

    Uso do VueResource em todos os componentes
        Definir no main.js
            import VueResource from 'vue-resource';
            Vue.use(VueResource);

# Lifecycle Hooks
    Cada componente passa por um ciclo de vida e em cada um desses é possível fazer qualquer coisa.

        <script>
            ...
            data() {
                return {
                    ...
                }
            },

            created() {
                alert('Criei o componente');
            }

        </script>
    
    Lista de hooks: https://vuejs.org/v2/api/#Options-Lifecycle-Hooks

# Adicionando componentes (Shared-Components) em outros componentes
    1 - Criar o componente em src/components/shared/<c_name>/C_name.vue
    2 - Adicionar o import do C_name.vue no componente desejado
            import C_name from './components/shared/<c_name>/C_name.vue';
            export default {
                ...
                components: {
                    'nome-tag-componente': C_name
                },
                ...
            }
    3 - Usar o componente com o nome 'nome-tag-componente' referenciando o componente C_name


# Adicionar o conteúdo dentro de um componente

    Colocar os dados dentro da tag do componente no local onde o componente é usado
        <meu-componente>
            <div id="conteudo">....</div>
        </meu-componente>
    
    No arquivo do componente (meu-componente) adicionar a tag <slot></slot>
        ...
        <slot></slot>
        ...
    
    Tudo que está dentro da tag meu-componente será adicionado no local onde o slot foi definido

# Definindo escopo interno dentro do componente
    Sempre adicionar o atributo scoped dentro da tag style. Isso vai fazer com que os estilos definidos nessa classe não sejam globais e,
    consequentemente, não afetem a página externa que pode utilizar estilos com um mesmo nome definidos internamente no componente.

        <style scoped>
            ...
        </style>

# Computed Properties
    Um método computado como uma propriedade

# Elemento transition
    O Vue vai ficar observando esse elemento e adicionando/removendo atributos quando o elemento for apresentado ou ocultado.
    Esses atributos são:
        valorNome-enter // antes do elemento ser incluido ou removido, o estado atual
        valorNome-enter-active // quando o elemento está sendo incluido
        valorNome-leave-active // quando o elemento está sendo removido

        <transition name="valorNome"></transition>

# Observação
    ':' -> data binding do evento da fonte de dados para a view
    '@' -> data binding do evento da view para fonte de dados

# Single Page Application
    Aplicações de uma única página que não recarregam no seu uso

# Router
    Vue Router
        npm install vue-router@2.1.1 --save
    
    Adicionar o novo modulo no main.js
        import Vue from 'vue';
        import VueRouter from 'vue-router';
        Vue.use(VueRouter);
    
    Constroi um arquivo routes.js no src/
        import Cadastro from './components/cadastro/Cadastro.vue';
        import Home from './components/home/Home.vue';

        export const routes = [
            {
                path: '',
                component: Home
            },
            {
                path: '/cadastro',
                component: Cadastro
            }
        ];
    
    Definindo as rotas no Vue Instance no main.js
        import { routes } from './routes';
        const router = new VueRouter({ routes });

        new Vue({
            el: '#app',
            router,
            render: h => h(App)
        })

    Definindo o componente router-view para carregamento das rotas
        // arquivo App.vue
        ...
        <template>
            <div class="container">
                <router-view></router-view>
            </div>
        </template>
        ...

    Observação:
        O import de algo com as chaves { } deve ser inserido se não for utilizado um export Default no arquivo no qual deseja-se importar.

        Exemplo:
            // arquivo routes.js
            export const routes = [
                {
                    path: '',
                    component: Home
                },
                {
                    path: '/cadastro',
                    component: Cadastro
                }
            ];

            import { routes } from './routes'; // CORRETO
            import routes from './routes'; // ERRADO
    

    Para remoção do '#' nas rotas é necessário fazer com que o servidor sempre retorne o index.html, independente da url que está sendo acessada.
    Como o 'servidor' foi criado pelo vue-cli, ele é configurado para isso. (?)

        const router = new VueRouter({ 
            routes,
            mode: 'history' // history do navegador
        });

    Após configurar as rotas, os links de acesso a essas rotas podem ser definidos como:
        <router-link to="/">Home</router-link>
        <router-link to="/cadastro">Cadastro</router-link>

# Eventos Customizados
    Emissão de eventos de componentes filho para o pai
        // Elemento filho
            <button class="botao botao-padrao" :type="tipo" @click="disparaAcao()">{{ rotulo }}</button>

            <script>
                export default {
                    methods: {
                        disparaAcao() {
                            this.$emit('acaoAposClickBotao');
                        }
                    }
                }
            </script>
        
        // Elemento pai
            <meu-botao tipo="button" rotulo="Remover" @acaoAposClickBotao="removeFoto(foto)"></meu-botao>

            <script>
                export default {
                    methods: {
                        removeFoto(foto) {
                            const indice = this.fotos.indexOf(foto);
                            this.fotos.splice(indice, 1);
                        }	
                    }
                }
            </script>
        
        Observação: se fosse necessário enviar alguma dado para o elemento pai, o mesmo seria recebido (no elemento pai como o(s) primeiro(s) parâmetro(s))
            // Elemento filho
            this.$emit('acaoAposClickBotao', 'dado a ser enviado');

            // Elemento pai
            <meu-botao tipo="button" rotulo="Remover" @acaoAposClickBotao="removeFoto($event, foto)"></meu-botao>
            removeFoto(event, foto) {
                // todo
            }