#################################################import numpy as np
import numpy as np
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func

from flask import Flask, jsonify
import datetime as dt


#################################################
# Database Setup
#################################################
engine = create_engine("sqlite:///hawaii.sqlite")

# reflect an existing database into a new model
Base = automap_base()
# reflect the tables
Base.prepare(engine, reflect=True)

# Save reference to the table
# Save references to each table

Measurement = Base.classes.measurement
Station = Base.classes.station

# Create our session (link) from Python to the DB


#################################################
# Flask Setup
#################################################
app = Flask(__name__)


#################################################
# Flask Routes
#################################################

@app.route("/")
def welcome():
    """List all available api routes."""
    return (
        f"Available Routes:<br/>"
        f"/api/v1.0/precipitation<br/>"
        f"/api/v1.0/stations<br/>"
        f"/api/v1.0/tobs<br/>"
        f"/api/v1.0/&lt;start&gt;<br/>"
        f"/api/v1.0/&lt;start&gt;/&lt;End&gt;<br/>"
        
    )


@app.route("/api/v1.0/precipitation")
def precipitation():
    """Return a list of all Date and Precipitation"""
    # Query all passengers
    session = Session(engine)
    results = session.query(Measurement.date,Measurement.prcp).all()

    # Convert list of tuples into normal list
    key=[]
    prcp=[]
    floatprcp = np.array(prcp, dtype = np.float32)
    for date,prcp in results:
        prcpdict={}
        key.append(date)
        floatprcp=np.append(floatprcp, prcp)
    parcipitation = dict(zip(key, floatprcp))
    return jsonify(parcipitation)

@app.route("/api/v1.0/stations")
def stations():
    """Return a list of all Date and Precipitation"""
    # Query all stations
    session = Session(engine)
    results = session.query(Station.station).all()
    all_station = list(np.ravel(results))
    return jsonify(all_station)

@app.route("/api/v1.0/tobs")
def tobs():
    """Return a list of all Date and Precipitation"""
    # Query all tobs
    session = Session(engine)
    # Calculate the date 1 year ago from the last data point in the database
    year_ago = (dt.datetime.strptime(session.query(Measurement.date).\
                                order_by(Measurement.date.desc()).first()[0],"%Y-%m-%d").date() - \
                                 dt.timedelta(days=365)).strftime("%Y-%m-%d")
    current_year=(dt.datetime.strptime(session.query(Measurement.date).\
                                order_by(Measurement.date.desc()).first()[0],"%Y-%m-%d").date())
    
    session = Session(engine)
    results =session.query(Measurement.tobs).filter(Measurement.date <= \
                                                                   current_year
                                                                   ,Measurement.date >=\
                                                                    year_ago).\
                                                                    order_by(Measurement.date).all()
    
    all_tobs = list(np.ravel(results))
    return jsonify(all_tobs)



def calc_temps(start_date, end_date=dt.date.today()):
    """TMIN, TAVG, and TMAX for a list of dates.
    
    Args:
        start_date (string): A date string in the format %Y-%m-%d
        end_date (string): A date string in the format %Y-%m-%d
        
    Returns:
        TMIN, TAVE, and TMAX
    """
    session = Session(engine)
    return session.query(func.min(Measurement.tobs), func.avg(Measurement.tobs), func.max(Measurement.tobs)).\
        filter(Measurement.date >= start_date).filter(Measurement.date <= end_date).all()




@app.route("/api/v1.0/<start>")
def start_analysis(start):
    """Return a list of all Date and Precipitation"""
    # Query all passengers
      
    results =calc_temps(start)
    all_start = list(np.ravel(results))
    return jsonify(all_start)

@app.route("/api/v1.0/<start>/<end>")
def start_End_analysis(start,end):
    """Return a list of all Date and Precipitation"""
    # Query all passengers
      
    results =calc_temps(start,end)
    all_start_end = list(np.ravel(results))
    return jsonify(all_start_end)


if __name__ == '__main__':
    app.run(debug=True)
    
 
