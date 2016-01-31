SOURCES=$(patsubst %.md,%.html,$(wildcard *.md))
SOURCES+=$(patsubst %.md,%.html,$(wildcard */*.md))
SITE:=/opt/www/nlgids.london/gen

all: $(SOURCES)

%.html: %.md
	mkdir -p $(SITE)/$(dir $@)
	pandoc -t html $< > $(SITE)/$@

.PHONY:
clean:
	rm -rf /opt/www/nlgids.london/gen/*
