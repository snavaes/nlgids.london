#!/usr/bin/perl -T
use strict;
use warnings;
use 5.008;
 
use CGI;
my $q = CGI->new;
 
my %data;
$data{name} = $q->param('inputEmail');
#$data{country} = $q->param('country');
#$data{question} = $q->param('question');
 
if ($data{name} !~ /^[\s\w.-]+$/) {
        print "Name must contain only alphanumerics, spaces, dots and dashes.";
        exit;
}
$ENV{PATH} = '';
sendmail(
    'Target <miek@miek.nl>',
    'hello world',
    'submitted: ' . $data{name},
    'Source <from@perlmaven.com>');
 
sub sendmail {
    my ($tofield, $subject, $text, $fromfield) = @_;
    my $mailprog = "/usr/lib/sendmail";
 
    open my $ph, '|-', "$mailprog -t -oi" or die $!;
    print $ph "To: $tofield\n";
    print $ph "From: $fromfield\n";
    print $ph "Reply-To: $fromfield\n";
    print $ph "Subject: $subject\n";
    print $ph "\n";
    print $ph "$text";
    close $ph;
    return ;
}
