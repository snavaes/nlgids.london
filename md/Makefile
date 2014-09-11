SOURCES=$(patsubst %.md,%.html,$(wildcard *.md))

all: $(SOURCES)

%.html: %.md
	pandoc -t html $< > inc/$@

