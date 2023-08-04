package p04419Mietzner;
import java.util.GregorianCalendar;

public class Flight {
	
	private String flightNo;
	private GregorianCalendar departureTime;
	private GregorianCalendar arrivalTime;
	
	public Flight(String newFlightNo, GregorianCalendar newDepartureTime, 
			GregorianCalendar newArrivalTime) {
		flightNo = newFlightNo;
		departureTime = newDepartureTime;
		arrivalTime = newArrivalTime;
	}
	
	//Get and Set Functions
	
	public String getFlightNumber() {
		return flightNo;
	}
	
	public void setDepartureTime(GregorianCalendar newDepartureTime) {
		departureTime = newDepartureTime;
	}
	
	public GregorianCalendar getDepartureTime() {
		return departureTime;
	}
	
	public void setArrivalTime(GregorianCalendar newArrivalTime) {
		arrivalTime = newArrivalTime;
	}
	
	public GregorianCalendar getArrivalTime() {
		return arrivalTime;
	}
	
	public long getFlightTime() {
		return(arrivalTime.getTimeInMillis() - departureTime.getTimeInMillis())/(1000 * 60);
	}
	
}
