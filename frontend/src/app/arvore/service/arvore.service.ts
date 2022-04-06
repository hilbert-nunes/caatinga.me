import { Injectable } from '@angular/core';
import { Arvore } from '../model/arvore';

@Injectable({
  providedIn: 'root'
})
export class ArvoreService {

  constructor() { }

  returnArvore(): Arvore{
    return {
      id: 1,
      singleName: 'Ameixa',
      popularName: 'ambuy (MG), ameixa-da-bahia (BA), ameixa-da-terra, ameixa-de-espinho (PE, RN), ameixa-do-brasil (SP), ameixa-do-para, ameixeira, ameixeira-de-espinho, espinheiro-de-ameixa.',
      family: 'Olacaceae',
      botanicalName: 'Ximenia americana L.',
      nameMeaning: null,
      generalDescription: 'Arvore pequena ou arbusto espinhoso, de 3-4 m de altura, de casca avermelhada a cinzenta, fina, pouco rugosa a lisa, muito adstringente. Folhas pecioladas, glabras, oblongas, alternas, inteiras, pequenas. Flores amareladas, aromáticas, com cheiro da flor de laranjeira, peludas, com as pétalas notável e elegantemente recurvadas, dispostas em racimos curtos axilares ou terminais. O fruto e uma drupa amarelo-alaranjada, ovoide, com ca. de 2 cm de diâmetro, contendo polpa aromática, mais ou menos doce, adstringente, pouco aquosa, comestível, envolvendo uma semente com amêndoa-branca. Fornece boa madeira de cor rósea, compacta e\n        leve, muito elástica, bastante durável, fácil de trabalhar.',
      specialDescription: 'Durante parte da estação seca, destaca-se pela copa verde no meio da caatinga seca. Tem espinhos. A copa se mostra mais aberta do que a do juazeiro (outro sempre-verde da caatinga). Da frutos comestíveis no final da estação seca.',
      whereOccurs: 'No Brasil, do Para até a Bahia, Minas Gerais, Goiás e Mato Grosso. No Ceara e frequente em todos os tabuleiros, no sertão, e também na região das dunas, mas ausente nas serras frescas',
      ecologicalInfo: 'Planta verde durante boa parte da estação seca, ocorre em agrupamentos. Os frutos são muito apreciados pelos animais silvestres e as abelhas tiram pólen e néctar das flores, isso na época do ano quando são poucas as plantas em floração na caatinga.',
      phenologicalInfo: 'Mantem as folhas verdes durante uma parte da estação seca, depois as perde e antes das primeiras chuvas renova a folhagem e floresce (novembro), seguida pela frutificação.',
      propagation: 'A ameixa pode ser propagada por sementes ou estacas.',
      managementGuide: null,
      utilities: 'Madeira: a madeira é própria para cabos de ferramentas e de instrumentos agrícolas. Alimentação humana: os frutos comestíveis e saborosos são uma importante fonte de vitaminas e sais minerais para os habitantes da caatinga, numa época do ano com poucas frutas. A polpa do fruto de um suco muito gostoso, mas tem de ser tirado com cuidado para não cortar o caroço. Poderia ser utilizado na fabricação de sorvetes e doces. Medicina caseira: usa-se a casca como adstringente, quer em banhos prolongados nas menstruações excessivas, quer em cozimento na lavagem de feridas ou ainda sob a forma de pó na cicatrização de úlceras e feridas. As sementes dão 70% de óleo viscoso, amarelo e purgativo. Restauração florestal: em reflorestamento, para enriquecer capoeiras e recuperar a vegetação de áreas degradadas. Sistemas agroflorestais: em pomares mistos de frutíferas nativas da caatinga. Uso na composição de quebra-ventos, faixas arbóreas entre plantações e acompanhando cercas e limites. Abelhas: fornece pólen e néctar para as abelhas na estação seca. Aplicações industriais: a essência das flores, com cheiro da flor da laranjeira, poderia ser usada na indústria de perfumaria. Outras aplicações: para sombreamento de estradas rurais.',
      culturalImportance: 'a ameixa e uma das plantas que sofreram, como toda a vegetação da caatinga, com o preconceito da inferioridade do Nordeste. Assim, suas utilidades não foram até agora valorizadas Nordeste e as potencialidades dessa planta são pouco estudadas e pouco utilizadas. Ela é uma planta de múltiplos usos, inclusive para a alimentação humana direta (frutos) e indireta (mel de abelha), para a saúde humana, para usos da madeira e tem potencial como fonte de renda (perfumaria). Deve ser mais estudado também o emprego como "estaca viva" para cercas, como planta ornamental. o fato de a ameixa dar fruto saboroso no meio estação seca, sem irrigação, faz dela uma espécie adequada para ser usada em pomares mistos de frutíferas nativas, reflorestamento e enriquecimento de capoeiras, plantio ao longo das estradas, perto das casas e em faixas arbóreas entre plantações ou acompanhando cercas ou limites. Dessa forma, a produção de frutas, tão importantes para a alimentação humana no meio da estação seca, pode ocorrer sem precisar de irrigação e sem ocupar as terras mais férteis.'
    }
  }
}
