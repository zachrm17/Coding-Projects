package p04419Mietzner;
import java.util.List;
import java.util.ArrayList;
import java.util.GregorianCalendar;

import p04419Mietzner.Flight;
import p04419Mietzner.Itinerary;

public class FlightTime {

	public static void main(String[] args) {
		List<Flight> flights = new ArrayList<>();
		flights.add(new Flight ("US230",
				new GregorianCalendar(2014, 4, 5, 5, 5, 0),
				new GregorianCalendar(2014, 4, 5, 6, 15, 0)));
		flights.add(new Flight ("US235",
				new GregorianCalendar(2014, 4, 5, 6, 55, 0),
				new GregorianCalendar(2014, 4, 5, 7, 45, 0)));
		flights.add(new Flight ("US237)",
				new GregorianCalendar(2014, 4, 5, 9, 35, 0),
				new GregorianCalendar(2014, 4, 5, 12, 55, 0)));
		
		Itinerary itinerary = new Itinerary(flights);
		System.out.println("Total Travel Time: " + itinerary.getTotalTravelTime());
		System.out.println("Total Flight Time: " + itinerary.getTotalFlightTime());
	}
	
}
