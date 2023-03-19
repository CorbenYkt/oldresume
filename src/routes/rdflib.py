import rdflib
from rdflib import *

g = rdflib.Graph()
result = g.parse("", format="text/n3")

qres = g.query(
    """SELECT *
       WHERE {
          ?class rdf:type classes:function .
       }""")

for row in qres:
    print(row)
