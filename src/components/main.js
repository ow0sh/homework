import React from 'react';

function Block(props) {
  let className = 'article_block';

  if (props.heading === 'MISSION') {
    className = 'article_block mission';
  }

  if (!props.heading) {
    return (
      <article className="article_block">
        <div className="article_left">
          <div className="article_heading">
            <h1>
              WER <br className="heading_br" />
              WIR SIND
            </h1>
          </div>
        </div>
        <div className="article_right">{props.children}</div>
      </article>
    );
  }
  return (
    <article className={className}>
      <div className="article_left">
        <div className="article_heading">
          <h1 className="article_little">{props.heading}</h1>
        </div>
      </div>
      <div className="article_right">{props.children}</div>
    </article>
  );
}

export default class Main extends React.Component {
  render() {
    return (
      <main>
        <div className="container">
          <Block>
            <p>
              Die von George Soros gegründeten Open Society Foundations sind die
              weltweit größten privaten Geldgeber unabhängiger Gruppen, die sich
              für Gerechtigkeit, demokratische Regierungsführung und
              Menschenrechte einsetzen. Wir stellen jedes Jahr Tausende von
              Zuschüssen über ein Netzwerk nationaler und regionaler Stiftungen
              und Büros bereit und finanzieren eine Vielzahl von Projekten, von
              denen viele jetzt von den Herausforderungen der COVID-19-Pandemie
              geprägt sind.
            </p>
          </Block>
          <Block heading="HISTORY">
            <p className="normal_content">
              George Soros, der Gründer und Vorsitzende der Open Society
              Foundations, begann seine philanthropische Arbeit im Jahr 1979,
              indem er Stipendien für schwarzafrikanische Universitätsstudenten
              in Südafrika und für osteuropäische Dissidenten für ein Studium im
              Westen finanzierte. Heute finanzieren seine Stiftungen Gruppen und
              Projekte in mehr als 120 Ländern.
            </p>
          </Block>
          <Block heading="MISSION">
            <>
              <p className="normal_content">
                Wir glauben, dass die Lösungen für die nationalen, regionalen
                und globalen Herausforderungen, vor denen wir stehen, den freien
                Austausch von Ideen und Gedanken erfordern und dass jeder eine
                Stimme bei der Gestaltung der Politik haben sollte, die ihn
                betrifft.
              </p>
              <p className="normal_content">
                Wir arbeiten daher daran, lebendige und integrative
                Gesellschaften aufzubauen, die auf der Achtung der
                Menschenrechte und der Rechtsstaatlichkeit beruhen, deren
                Regierungen rechenschaftspflichtig und offen für die Beteiligung
                aller Menschen sind.
              </p>
              <p className="normal_content">
                Wir tun dies, indem wir eine Vielzahl unabhängiger Stimmen und
                unabhängiger Organisationen auf der ganzen Welt unterstützen –
                die Zivilgesellschaft, die eine kreative und dynamische
                Verbindung zwischen Regierenden und Regierten herstellt.
              </p>
              <p className="normal_content">
                Wir konzentrieren uns besonders darauf, diejenigen zu
                unterstützen, die nur aufgrund ihrer Identität diskriminiert
                werden, wie die Roma in Europa, und diejenigen, die an den Rand
                der Mehrheitsgesellschaft gedrängt werden, wie
                Drogenkonsumenten, Gefangene oder Sexarbeiter.
              </p>
            </>
          </Block>

          <div className="main_cells">
            <div className="main_cell">
              <h1>PROGRAMME</h1>
              <p>
                Zusätzlich zu unseren nationalen und regionalen Stiftungen wird
                die Arbeit der Open Society Foundations von einem Netzwerk
                thematischer und geografischer Programme unterstützt, deren
                Aktivitäten Finanzierung, Forschung, Interessenvertretung und
                Rechtsstreitigkeiten umfassen.
              </p>
              <a>
                <b>Erfahren Sie mehr über unsere Programme</b>
              </a>
            </div>
            <div className="main_cell">
              <h1>BÜROS UND STIFTUNGEN</h1>
              <p>
                Die Open Society Foundations bilden ein globales Netzwerk von
                Einheiten und Programmen, die sich lokalem Wissen und nationaler
                Expertise verschrieben haben. Unser Netzwerk umfasst nationale
                und regionale Stiftungen sowie Programme mit regionaler oder
                globaler Reichweite, die in mehr als 120 Ländern aktiv sind,
                darunter Drehkreuze in Europa und den Vereinigten Staaten.
              </p>
              <a>
                <b>Sehen Sie sich unsere Büros und Stiftungen an</b>
              </a>
            </div>
            <div className="main_cell">
              <h1>GLOBALER VORSTAND</h1>
              <p>
                Unser Global Board hilft unseren Mitarbeitern, Partnern und
                Stipendiaten bei ihrer weltweiten Arbeit zur Förderung von
                Gerechtigkeit, Demokratie und Menschenrechten.
              </p>
              <a>
                <b>Sehen Sie sich unser globales Board an</b>
              </a>
            </div>
          </div>
        </div>
      </main>
    );
  }
}
