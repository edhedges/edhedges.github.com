---
layout: post
title: I got a Pi for my birthday!
tags:
- Raspberry Pi
- Raspbian
- Linux
- Speech to Text
- Voice Control
- CMU Sphinx
---
#### No that isn't a typo... ####

I received a [Raspberry Pi] for my birthday! I got the [Raspberry Pi Model B+ Starter Kit] and
I just felt like giving back to the awesome community by sharing my experience and setup.

#### In the beginning ####

I feel like I started my adventures into the world of the RPi (short for Raspberry Pi in case you didn't figure it out) a step
ahead of the norm because I didn't have to go through any manual os download and install. The starter kit I purchased came with
[NOOBS] installed, so all I had to do was plug everything in and select the distros to install on my microSD card. I installed
Raspbian and my initial set up worked fine, but [it was not aesthetically pleasing] and needed some configuration and improvement.

#### 1080p display ####

The first improvement I made was to get my RPi to display nicely on [my monitor]. I couldn't find any information specifically for my monitor so
I played around with changing different values of my ```/boot/config.txt``` using the [RPiconfig documentation].

The NOOBS installation of Raspbian set me up with some default configurations and I ended up changing the following three sections of the config:

    # I uncommented the following two lines and changed the value of hdmi_mode to 16
    hdmi_group=1
    hdmi_mode=16

    # Commented out the following four lines
    #overscan_left=24
    #overscan_right=24
    #overscan_top=16
    #overscan_bottom=16
    
    # Changed the value to 1
    disable_overscan=1

#### Shiny new toys ####

The next steps I took involve the following three purchases I made from my local [Micro Center]:

* [TP-LINK 150Mbps wireless N Nano USB adapter] Model No. TL-WN725N Ver 2.0 - I wanted to be able to move my RPi around while still keeping connectivity so
this one was a must. It was also a small pain to set up, which I will elaborate later.
* [Sabrent 3D Audio Sound Card USB Adapter] - I've got some speech to text ideas in mind that will allow me to do some voice control type of stuff.
So far I've struggled to find an accurate open source and free speech to text solution. I've done some research on this and have seen a lot of people
using [CMU Sphinx], but my experience with it's accuracy hasn't been a good one. That being said, I'm sure that part of the inaccuracies stem from me not
knowing how to fine-tune it.
* [Mini 4 Port USB 2.0 Hub] - This one is mostly just a nice item to have. Mine is blue, but I couldn't find a link to a blue one.

When I got home and attempted to use my shiny and new USB devices the only one that worked right away was the hub!

1/3 working USB devices...

Of the two USB devices that didn't work out of the box I got the wireless adapter working first. I thought this one would be easy because before
purchasing, I remember seeing it on the list of [verified RPi USB Wi-Fi Adapters peripherals]. I was correct indeed that it was there, but there's always
a catch. I read the line for the first version of the model number I bought and it said that it worked out of the box. Version 2 on the other hand needs
very specific drivers manually installed. The detailed description of what to do is documented very well in the [forum post by MrEngman]. I followed his
post to a tee and I had wireless connectivity! 

2/3 working USB devices...

Fixing the sound card should have been a quick, but due to lack of knowledge of Linux and [ALSA] it took me far too long to figure out.
The first thing I did was run `lsusb` in order to see if the RPi even detected my sound card, which it did. Since the usb device was recognized
I narrowed my search to things relating to ALSA. I found that by running `cat /proc/asound/cards` I could check the existence of a machine's
sound cards. The sound card existed, but it wasn't the first/default one. I then found this [forum post by ski522] and used the first step example to demote
the onboard sound card. I rebooted my RPi and it worked!

3/3 working USB devices :)

#### Let's make a headless Pi ####

Now that all my new toys are working, I realized it might be nice to be able to remote into my RPi and use it as a headless computer. I did some searching and
found official [RPi VNC docs], which I paired with a [Penguin Tutor] tutorial. I was able to set up my RPi to start up a vncserver on boot. I then connect to it
from my Windows 7 machine. The Penguin Tutor tutorial is only important if like me you want to run the vncserver instance as a user other than `root`.

A final pro tip about beheading an RPi is that the vnc client will need the IP address of the RPi and index of the vncserver instance. I use the command `ping
raspberrypi` to find the IP of my RPi connected to my network. If you are only starting one vncserver the index would be 0. This means that the remote host of
my RPi looks like `123.456.7.89:0`.

With my [headless Pi current set up] the only wire that needs to be plugged in is the power supply. This means that in theory I could go full wireless by using
a battery to provide power. The possibilities are endless!

[Raspberry Pi]:http://www.raspberrypi.org/
[Raspberry Pi Model B+ Starter Kit]:http://www.mcmelectronics.com/product/83-16332
[NOOBS]:http://www.raspberrypi.org/introducing-noobs/
[it was not aesthetically pleasing]:http://i.imgur.com/3HKwSso.jpg
[my monitor]:http://www.asus.com/Monitors/VS239H/
[RPiconfig documentation]:http://elinux.org/RPiconfig
[Micro Center]:http://www.microcenter.com/site/stores/overland-park.aspx
[TP-LINK 150Mbps wireless N Nano USB adapter]:http://www.microcenter.com/product/395710/150Mbps_wireless_N_Nano_USB_adapter
[Sabrent 3D Audio Sound Card USB Adapter]:http://www.microcenter.com/product/364947/3D_Audio_Sound_Card_USB_Adapter
[Mini 4 Port USB 2.0 Hub]:http://www.microcenter.com/product/319527/4-Port_USB_20_Hub_-_Black
[CMU Sphinx]:http://cmusphinx.sourceforge.net/
[verified RPi USB Wi-Fi Adapters peripherals]:http://elinux.org/RPi_USB_Wi-Fi_Adapters
[forum post by MrEngman]:http://www.raspberrypi.org/forums/viewtopic.php?p=462982
[ALSA]:http://www.alsa-project.org/main/index.php/Main_Page
[forum post by ski522]:http://www.raspberrypi.org/forums/viewtopic.php?t=20866
[RPi VNC docs]:http://www.raspberrypi.org/documentation/remote-access/vnc/
[Penguin Tutor]:http://www.penguintutor.com/linux/tightvnc
[headless Pi current set up]:http://i.imgur.com/NJdYV4P.jpg




