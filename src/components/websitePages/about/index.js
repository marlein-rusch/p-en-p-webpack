// about
import React, {Component} from 'react';

class About extends Component {
    render(){
        return(
            <div>
                <p>
                    Onze vereniging is bedoeld voor mensen die samen met anderen willen schilderen en daarbij op een door hen gekozen ochtend, middag of avond van professionele begeleiding en een passende werkruimte gebruik willen maken.
                </p>
                <p>
                    In ons atelier zijn, m.u.v. de weekends en de vakantieperiode, gedurende tenminste 11 dagdelen per week teken- en schildergroepen actief.
                    Deze groepen worden begeleid door professioneel geschoolde kunstenaars, die graag hun bijdrage willen leveren aan de verdere ontwikkeling van uw artistieke prestaties.
                    Het atelier biedt de ruimte en faciliteiten, die het u mogelijk maken onbezorgd bezig te zijn.
                    Het werken in een groep biedt naast het sociale contact ook de mogelijkheid elkaar wederzijds artistiek te inspireren.
                </p>
                <p>Onderstaande video geeft een filmimpressie van Potlood & Penseel</p>
                <iframe
                    src="https://www.youtube.com/embed/voknxMQJNqE"
                    width="374"
                    height="210"
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title='video'
                />
            </div>
        )
    }
}

export default About;