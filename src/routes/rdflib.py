import rdflib
from rdflib import *

g = rdflib.Graph()
result = g.parse(
    "https://raw.githubusercontent.com/CorbenYkt/corbenykt.github.io/main/src/routes/IDEF0.n3", format="text/n3")

qres = g.query(
    """SELECT *
       WHERE {
          ?class rdf:type classes:function .
       }""")

for row in qres:
    print(row)
