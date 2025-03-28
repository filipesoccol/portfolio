---
title: "What Really Matter in AI Code Assistants"
date: "2025-02-22"
tags: ["ai", "llm", "code"]
image: "/blog/Dive.png"
---

Atualmente a GPT (Generative Pre-trained Transformers) tem dominado noticiários com todo o tipo de promessas irreais que já vimos em outras tecnologias recentemente. Seja computação quântica ou DLTs (Comumente conhecido como blockchains), sempre surgem soluções que não se provam quando checadas pelos pares. Este post tem a intenção de clarificar alguns prós e contras da mais comum e disseminada tecnologia de inteligência artificial. 

Vou me ater ao estado atual das coisas. Caso algum ponto mude futuramente graças a uma solução que se prove realmente funcional posso revisar isso em algum outro texto. Oque descrevo a seguir são elementos limitantes da tecnologia que impedem grandes saltos evolutivos dos atuais LLM(Large language models). Este texto também versa do ponto de vista de programação, portanto não se aplica à geração de imagens ou processamento de audio ou redação de texto em geral.
  
## Problematic grounds

Aqui cito alguns pontos limitantes dos atuais modelos, e tentarei também explanar de forma didática o motivo pelo qual alguns obstáculos são difíceis de transpor.

### Size of the context issues

O tamanho do contexto em que a LLM pode utilizar é limitado. Portanto mesmo um contexto gigante como o do modelo do ChatGPT atual que é de 32k tokens. Terá problemas em processar uma base de código de um sistema de porte médio, que pode facilmente ultrapassar o tamanho do contexto atual. Quando isso ocorre a IA pode achar que o bloco de código não presente nem existe ou até mesmo acreditar que possíveis conexões com funções não presentes no contexto podem estar incorretas e removê-las.

Existem atualmente algumas técnicas para expandir o tamanho do contexto utilizando uma memória externa ao modelo ou até mesmo a utilização de modelos que possuem raciocínio. Porém de forma prática eles não solucionam 100% dos problemas ocasionados pela limitação do contexto que citarei na sequência.

### Ghost functions hallucinations

Gostaria de aqui mencionar algo um pouco óbvio porém que pode passar batido, o fato que LLMs não possuem raciocínio de fato. Ao menos não da forma como humanos o fazem. Estes modelos apesar de não serem determinísticos, ou seja, para a mesma entrada eles não geram sempre a mesma saída. Isso não quer dizer que estão tendo algum tipo de raciocínio real.

![This will be the caption text asd asd asd asd asd asd{.float-left}](/blog/Dive.png)

Dito isto, grandes bases de informações alimentadas nestes modelos, não garantem que haja uma compreensão de fato das nuances do código em si. Pois as tomadas de decisão da IA se basearão na entrada do contexto somada ao que o modelo foi treinado. Mesmo solicitando ao assistente que utilize uma abordagem específica não há nenhuma garantia de que a saída dada pelo assistente vai cumprir exatamente a solicitação.

Nestes casos é muito comum a ocorrência de funções fantasma. Que são nada menos do que funções que nunca existiram no contexto. Mas poderiam existir nas bases utilizadas para treinar o modelo. Estes não são os casos mais graves pois IDEs e até mesmo compiladores irão apontar a falha. Porém em linguagens interpretadas, as vezes pode ocorrer desta verificação não ser feita e a falha pode ocorrer somente quando a linha onde a chamada da função está for chamada.


### Code duplication

Outro problema comum e que muitas vezes não ocasionam erros, porém dificultam muito a manutenção do código, são as duplicações de linhas e funções. No momento de efetuar o recorte de contexto, ao não selecionar alguma função que estava sendo chamada, ocorre que a IA ao não encontrar a declaração da função, irá ela mesma implementar novamente esta. Ocasionando assim muitas duplicações de código e um pesadelo na hora de que alguma destas funções duplicadas apresente erros. Um programador comum vai procurar a ocorrência da função que falhou e pode acabar modificando outra, e o erro permanecer. 

Por isso é muito comum que ao se utilizar modelos que raciocinam para programar, de inicio a base de código é íntegra. E conforme o código vai se incrementando problemas como este se multiplicam. Este tipo de problema deve ser dada muita atenção. Portanto, mesmo que o programador solicite uma feature simples ele precisa revisar todas as linhas escritas pela IA a procura destes tipos de duplicação e removê-las.

### Bug Obfuscation

Este talvez seja o maior problema de todos quando se trata de código escrito por inteligência artificial. Não diz tanto respeito as limitações de contexto, mas sim, ao formato não determinístico e a base de dados utilizadas para o treinamento de LLMs. A forma na qual estes modelos geram novos caracteres e tokens podem ter leves variações devido a gigantesca base de dados na qual são alimentados. Dito isto, é possível que pequenos pedaços de código ao serem gerados, se basearam em implementações distintas porém com o mesmo objetivo. Isso pode gerar não somente um bug no código, mas também pelo fato de parecer correto, escapa ao olho humano e passa nas compilações, verificações de erros e possivelmente até testes unitários.

Ocorre que este código pode apresentar erro ou variação do resultado em situações muito específicas. Podendo rodar por meses sem cair nesta condição. E pior ainda, quando o problema ocorre, ao passar por manutenção humana, o desenvolvedor não será capaz de identificar facilmente o problema.

## Better usability

Todos os problemas mencionados acima são os grandes obstáculos para as LLMs atualmente, quando se trata de programação de sistemas. Aumentar o contexto de uma IA ocasiona também aumento de tempo no treinamento, dificuldade de manutenção e aumento considerável de custos. Sendo assim, agora vou especificar alguns pontos em que as atuais IAs já facilitam muito o trabalho e aumentam drasticamente a perfomance de desenvolvedores.  

### Code Prediction

  

### Repetitive tasks

  

### No need to memorize syntax

  

### Discover best practices for a language

## Conclusion:

AI-assisted coding is a powerful tool that can revolutionize the way we write software, but it’s not a silver bullet. By leveraging AI responsibly—combining its strengths with human expertise—developers can maximize its benefits while mitigating potential downsides. The key is to use AI as a complement, not a replacement, for human ingenuity.

## References

[Hallucinations in code are the least dangerous form of LLM mistakes](https://simonwillison.net/2025/Mar/2/hallucinations-in-code/)