import Head from "next/head";
import useProtectedPage from './../hooks/useProtectedPage';

export default function About () {
    useProtectedPage()
    
    return (
        <>
        <Head>
            <title>Intranet | Casal</title>
            <meta name="description" content="Intranet da Companhia de Saneamento de Alagoas" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="px-4 lg:px-0 max-w-screen-xl mx-auto my-10 flex flex-col font-mono">
            <h1 className="text-3xl">A Empresa</h1>

            <h2 className="text-2xl mt-8 text-green-600">Princípios Essenciais</h2>

            <h3 className="text-xl mt-4 text-blue-900">Missão</h3>
            <p className="text-sm mt-2">Promover a qualidade de vida da sociedade alagoana com ética e responsabilidade social satisfazendo os clientes internos e externos, através da prestação de serviços de abastecimento de água e esgotamento sanitário de excelência, com sustentabilidade sócio-ambiental e financeira.</p>

            <h3 className="text-xl mt-4 text-blue-900">Visão</h3>
            <p className="text-sm mt-2">Ser uma empresa modelo em saneamento.</p>

            <h3 className="text-xl mt-4 text-blue-900">Valores e Pincípios</h3>
            <p className="text-sm mt-2">Ética, Profissionalismo, Respeito às pessoas, Compromisso e Prazer em servir.</p>

            <h2 className="text-2xl mt-8 text-green-600">A História</h2>
            <p className="text-sm mt-2">Até 1962, as ações de Saneamento Básico em Alagoas eram implementadas por diversos órgãos como:</p>

            <h3 className="text-xl mt-4 text-blue-900">SAEM – Serviço de Água e Esgotos de Maceió</h3>
            <p className="text-sm mt-2">Autarquia estadual responsável pela construção, operação e manutenção do abastecimento d’água e coleta de esgotos sanitários da cidade de Maceió.</p>

            <h3 className="text-xl mt-4 text-blue-900">DAE – Departamento de Água e Esgoto</h3>
            <p className="text-sm mt-2">Órgão vinculado à então Secretaria de Viação e Obras Públicas, responsável pela coordenação dos assuntos relativos a água e energia no estado. Na área de abastecimento d’água, o DAE se restringia a pesquisa de mananciais e projetos de abastecimento d’água. Somente a partir de 1960/61 é que o Departamento deu início a construção de alguns sistemas de abastecimento d’água tais como o de Taquarana, Girau do Ponciano e Maribondo.</p>

            <h3 className="text-xl mt-4 text-blue-900">DNOCS e DNERU – Departamento Nacional de Obras contra a Seca e Departamento Nacional de Endemias Rurais</h3>
            <p className="text-sm mt-2">Órgãos federais que atuavam na construção de sistemas de abastecimento de água no interior do Estado, passando para as Prefeituras ou outros órgãos, a operação dos sistemas.</p>

            <h3 className="text-xl mt-4 text-blue-900">FSESP – Fundação Serviço Especial de Saúde Pública</h3>
            <p className="text-sm mt-2">
            Órgão federal que, em convênio com Prefeituras, criaram os SAAE’s – Serviços Autônomos de Água e Esgotos. O FSESP construia, operava e mantinha estes sistemas, assessorando as Prefeituras na área administrativa.
            <br /><br />
            Em 1962, o Governo do Estado extinguiu o DAE e em dezembro do mesmo ano, através da Lei n. 2.491, criou a CASAL – Companhia de Saneamento de Alagoas. De acordo com o texto legal, a CASAL é responsável pela construção, exploração e manutenção dos sistemas de abastecimento d’água e esgotamento sanitário dos centros populacionais do Estado.
            <br /><br />
            Em outubro de 1963, em sua sede provisória e já com sua primeira Diretoria, a Companhia começou a tomar as suas primeiras decisões. Foram então implementadas os seguintes serviços : Projeto do Sistema de Abastecimento d’água de Satuba; operação e manutenção dos Sistemas de Anadia e Taquarana; execução das obras do Sistema Coletivo da Bacia Leiteira.
            <br /><br />
            Estas, iniciadas no primeiro semestre de 1964, foram desenvolvidas a partir de Belo Monte até Jacaré dos Homens. Este trecho de adutora foi concluido em abril de 1966 quando, depois de feitos os testes de operação, a água do Rio São Francisco chegava à Jacaré dos Homens.
            <br /><br />
            Ainda em 1966 foram iniciados os trabalhos de engenharia para o projeto da Adutora do Agreste. Suas obras foram iniciadas com o lançamento do marco inicial no Morro do Gaia, em São Brás, no ano de 1970, enquando continuavam as obras restantes do Sistema da Bacia Leiteira.
            <br /><br />
            A incorporação do SAEM pela CASAL, ocorrida em abril de 1970, através do Decreto n. 1.753, permitiu que a empresa iniciasse a operação dos sistemas da Capital, iniciando-se o faturamento e cobrança destes serviços no ano seguinte. As obras da Bacia Leiteira foram inauguradas no primeiro semestre de 1971, na cidade de Olivença.
            <br /><br />
            Este sistema passou a beneficiar também as cidades de Batalha, Belo Monte, Cacimbinhas, Jacaré dos Homens, Major Isidoro, Monteirópolis, Olho D’Água das Flores, São José da Tapera, São Marcos (na época, sede municipal) e Santana do Ipanema.
            <br /><br />
            Mais tarde, o Sistema foi ampliado, atendendo mais oito municípios. No limiar de 1972, através de Lei Municipal, foi incorporado à CASAL, o Sistema de Abastecimento de Rio Largo e iniciados os primeiros trabalhos de engenharia para construção do Sistema da Carangueja, visando atendera cidade de Palmeira dos Índios.
            <br /><br />
            Ao comemorar 10 anos de sua criação, em 1973, a CASAL inaugurava o Sistema Coletivo da Zona do Agreste e prosseguia no desenvolvimento de vários projetos, tais como os Sistemas da Carangueja e Sertão.
            <br /><br />
            Além da inclusão de outros sistemas, consolidando assim, a expansão do saneamento básico no estado de Alagoas, a CASAL, a partir de 1984, iniciou a implantação de dois megaprojetos na cidade de Maceió – O sistema Pratagy e o Emissário Submarino. O primeiro ainda em fase de conclusão, devido a circunstâncias político-econômicas enfrentadas pelo Estado, enquanto o último foi concluído em maio de 1989, proporcionando melhorias na qualidade de vida da população
            <br /><br />
            Atualmente a CASAL atua em 76 municípios do Estado, inclusive Maceió, sendo responsável pelo abastecimento de água tratada nestes municípios.
            <br /><br />
            No tocante a esgotamento sanitário, presta serviço às cidades de Maceió, Maragogi, Piranhas, Batalha, Santana do Ipanema, Palmeira dos Índios e Paulo Jacinto.
            </p>
        </main>
        </>
    )
}