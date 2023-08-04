package p04419Mietzner;
import java.util.GregorianCalendar;
import java.util.List;

public class Itinerary {
	
	private List<Flight>flights;
	
	public Itinerary(List<Flight>newFlights) {
		flights = newFlights;
	}
	
	public long getTotalTravelTime() {
		long totalTravelTime = 0;
		if(flights.size() > 0) {
			
			//Gets the first flight's departure time
			GregorianCalendar firstFlightDeparture = flights.get(0).getDepartureTime();
			
			//Gets the last flight's arrival time
			GregorianCalendar lastFlightArrival = flights.get(flights.size()-1).getArrivalTime();
			
			//Finds difference of time in minutes
			totalTravelTime = (lastFlightArrival.getTimeInMillis() - firstFlightDeparture.getTimeInMillis())/(1000 * 60);
		}
		return totalTravelTime;
	}
	
	public long getTotalFlightTime() {
		long totalFlightTime = 0;
		for(Flight f : flights) {	//Iterates through each flight
			totalFlightTime += f.getFlightTime();
		}
		return totalFlightTime;
	}
}
