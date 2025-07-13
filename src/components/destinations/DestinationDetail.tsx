import React from 'react';
import { Destination } from '@/types/destination';
import LcarsPanel from '../lcars/LcarsPanel';
import LcarsButton from '../lcars/LcarsButton';
import WarpCalculator from './WarpCalculator';

interface DestinationDetailProps {
  destination: Destination;
  onClose: () => void;
}

const DestinationDetail: React.FC<DestinationDetailProps> = ({
  destination,
  onClose,
}) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-black w-full max-w-4xl rounded-lg overflow-hidden border border-lcars-orange/50 flex flex-col" style={{ maxHeight: '90vh' }}>
        <LcarsPanel className="p-6 flex-1 overflow-y-auto lcars-scrollbar">
          <div className="sticky top-0 bg-black z-10 flex justify-between items-start mb-6 pb-2">
            <div>
              <h2 className="text-2xl font-bold text-lcars-orange mb-2">
                {destination.name}
              </h2>
              <p className="text-lcars-blue">
                {destination.type} • {destination.quadrant}
              </p>
            </div>
            <LcarsButton onClick={onClose} color="danger">
              Close
            </LcarsButton>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lcars-orange text-lg mb-2">Location Details</h3>
                <div className="space-y-2 text-lcars-cream">
                  <p>
                    <span className="text-lcars-blue">Sector:</span> {destination.sector}
                  </p>
                  <p>
                    <span className="text-lcars-blue">System:</span> {destination.system}
                  </p>
                  <p>
                    <span className="text-lcars-blue">Distance:</span> {destination.distance}{' '}
                    light years
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-lcars-orange text-lg mb-2">Population & Government</h3>
                <div className="space-y-2 text-lcars-cream">
                  <p>
                    <span className="text-lcars-blue">Population:</span> {destination.population}
                  </p>
                  <p>
                    <span className="text-lcars-blue">Species:</span>{' '}
                    {destination.species.join(', ')}
                  </p>
                  <p>
                    <span className="text-lcars-blue">Government:</span>{' '}
                    {destination.government}
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-lcars-orange/20 pt-4">
              <WarpCalculator
                distanceInLightYears={destination.distance}
                destinationName={destination.name}
              />
            </div>

            <div className="border-t border-lcars-orange/20 pt-4">
              <h3 className="text-lcars-orange text-lg mb-2">About</h3>
              <p className="text-lcars-cream">{destination.description}</p>
            </div>

            {destination.requiredClearances && destination.requiredClearances.length > 0 && (
              <div className="border-t border-lcars-orange/20 pt-4">
                <h3 className="text-lcars-orange text-lg mb-2">Required Clearances & Documentation</h3>
                <ul className="list-disc list-inside text-lcars-cream">
                  {destination.requiredClearances.map((doc) => (
                    <li key={doc}>{doc}</li>
                  ))}
                </ul>
              </div>
            )}
            
            {destination.medicalRequirements && (
              <div className="border-t border-lcars-orange/20 pt-4">
                <h3 className="text-lcars-orange text-lg mb-2">Medical Requirements & Advisories</h3>
                <div className="text-lcars-cream space-y-4">
                  {destination.medicalRequirements.vaccinations && (
                    <div>
                      <h4 className="text-lcars-blue font-medium">Required Vaccinations:</h4>
                      <ul className="list-disc list-inside ml-2">
                        {destination.medicalRequirements.vaccinations.map((vaccination) => (
                          <li key={vaccination}>{vaccination}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {destination.medicalRequirements.advisories && (
                    <div>
                      <h4 className="text-lcars-blue font-medium">Medical Advisories:</h4>
                      <ul className="list-disc list-inside ml-2">
                        {destination.medicalRequirements.advisories.map((advisory) => (
                          <li key={advisory}>{advisory}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {destination.medicalRequirements.facilities && (
                    <div>
                      <h4 className="text-lcars-blue font-medium">Medical Facilities:</h4>
                      <p className="ml-2">{destination.medicalRequirements.facilities}</p>
                    </div>
                  )}
                  
                  {destination.medicalRequirements.emergencyProtocol && (
                    <div>
                      <h4 className="text-lcars-blue font-medium">Emergency Protocol:</h4>
                      <p className="ml-2">{destination.medicalRequirements.emergencyProtocol}</p>
                    </div>
                  )}
                </div>
              </div>
            )}
            
            {destination.portFacilities && (
              <div className="border-t border-lcars-orange/20 pt-4">
                <h3 className="text-lcars-orange text-lg mb-2">Port Facilities</h3>
                <div className="text-lcars-cream space-y-4">
                  {destination.portFacilities.docking && (
                    <div>
                      <h4 className="text-lcars-blue font-medium">Docking Facilities:</h4>
                      <p className="ml-2">{destination.portFacilities.docking}</p>
                    </div>
                  )}
                  
                  {destination.portFacilities.services && (
                    <div>
                      <h4 className="text-lcars-blue font-medium">Available Services:</h4>
                      <ul className="list-disc list-inside ml-2">
                        {destination.portFacilities.services.map((service) => (
                          <li key={service}>{service}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {destination.portFacilities.supplies && (
                    <div>
                      <h4 className="text-lcars-blue font-medium">Supply Acquisitions:</h4>
                      <ul className="list-disc list-inside ml-2">
                        {destination.portFacilities.supplies.map((supply) => (
                          <li key={supply}>{supply}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {destination.portFacilities.maintenance && (
                    <div>
                      <h4 className="text-lcars-blue font-medium">Maintenance Capabilities:</h4>
                      <p className="ml-2">{destination.portFacilities.maintenance}</p>
                    </div>
                  )}
                  
                  {destination.portFacilities.restrictions && (
                    <div>
                      <h4 className="text-lcars-blue font-medium">Port Restrictions:</h4>
                      <p className="ml-2">{destination.portFacilities.restrictions}</p>
                    </div>
                  )}
                </div>
              </div>
            )}
            
            {destination.localCustoms && (
              <div className="border-t border-lcars-orange/20 pt-4">
                <h3 className="text-lcars-orange text-lg mb-2">Local Customs and Protocols</h3>
                <div className="text-lcars-cream space-y-4">
                  {destination.localCustoms.greetings && (
                    <div>
                      <h4 className="text-lcars-blue font-medium">Standard Greetings:</h4>
                      <p className="ml-2">{destination.localCustoms.greetings}</p>
                    </div>
                  )}
                  
                  {destination.localCustoms.etiquette && destination.localCustoms.etiquette.length > 0 && (
                    <div>
                      <h4 className="text-lcars-blue font-medium">Expected Etiquette:</h4>
                      <ul className="list-disc list-inside ml-2">
                        {destination.localCustoms.etiquette.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {destination.localCustoms.taboos && destination.localCustoms.taboos.length > 0 && (
                    <div>
                      <h4 className="text-lcars-blue font-medium">Cultural Taboos:</h4>
                      <ul className="list-disc list-inside ml-2">
                        {destination.localCustoms.taboos.map((taboo) => (
                          <li key={taboo}>{taboo}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {destination.localCustoms.culturalNotes && (
                    <div>
                      <h4 className="text-lcars-blue font-medium">Cultural Notes:</h4>
                      <p className="ml-2">{destination.localCustoms.culturalNotes}</p>
                    </div>
                  )}
                  
                  {destination.localCustoms.diplomaticProtocols && (
                    <div>
                      <h4 className="text-lcars-blue font-medium">Diplomatic Protocols:</h4>
                      <p className="ml-2">{destination.localCustoms.diplomaticProtocols}</p>
                    </div>
                  )}
                </div>
              </div>
            )}
            
            {destination.seasonalVariations && (
              <div className="border-t border-lcars-orange/20 pt-4">
                <h3 className="text-lcars-orange text-lg mb-2">Seasonal Variations and Recommendations</h3>
                <div className="text-lcars-cream space-y-4">
                  {destination.seasonalVariations.peakTravelTimes && (
                    <div>
                      <h4 className="text-lcars-blue font-medium">Peak Travel Times:</h4>
                      <p className="ml-2">{destination.seasonalVariations.peakTravelTimes}</p>
                    </div>
                  )}
                  
                  {destination.seasonalVariations.weatherAdvisories && destination.seasonalVariations.weatherAdvisories.length > 0 && (
                    <div>
                      <h4 className="text-lcars-blue font-medium">Weather Advisories:</h4>
                      <ul className="list-disc list-inside ml-2">
                        {destination.seasonalVariations.weatherAdvisories.map((advisory) => (
                          <li key={advisory}>{advisory}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {destination.seasonalVariations.specialEvents && destination.seasonalVariations.specialEvents.length > 0 && (
                    <div>
                      <h4 className="text-lcars-blue font-medium">Special Events:</h4>
                      <ul className="list-disc list-inside ml-2">
                        {destination.seasonalVariations.specialEvents.map((event) => (
                          <li key={event}>{event}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {destination.seasonalVariations.recommendations && (
                    <div>
                      <h4 className="text-lcars-blue font-medium">Travel Recommendations:</h4>
                      <p className="ml-2">{destination.seasonalVariations.recommendations}</p>
                    </div>
                  )}
                </div>
              </div>
            )}
            
            {destination.attractions && (
              <div className="border-t border-lcars-orange/20 pt-4">
                <h3 className="text-lcars-orange text-lg mb-2">Notable Attractions</h3>
                <ul className="list-disc list-inside text-lcars-cream">
                  {destination.attractions.map((attraction) => (
                    <li key={attraction}>{attraction}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </LcarsPanel>
      </div>
    </div>
  );
};

export default DestinationDetail;
