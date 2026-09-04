# EECS 589: Advanced Computer Networks

## Administrivia
* Catalog Number: 33534
* Lectures/Discussion: 1010 DOW, TuTh 4:00PM - 6:00PM

### Team

| Member (uniqname) | Role | Office Hours |
| :---------------- | :--- | :----------- |
| [Peter Honeyman](http://www.citi.umich.edu/u/honey/) (honey) | Faculty | 4777 BBB. By appointment or drop-in |
| [HyunJong (Joseph) Lee](http://leelabs.org/) (hyunjong) | GSI | BBB Learning Center. By appointment |

## Course Description
This is a graduate level course on computer networking focusing on advanced
topics and is a must for anyone interested in doing research in computer
networks. This class examines current and emerging research topics in
computer networking. Topics covered include network protocols, network
measurement, Internet routing, peer to peer networks, network security,
wireless, and sensor networks. 

The course consists of both a reading/lecture/discussion component and a project
component. Emphasis of the course is on topics in wide-area networks, wireless
networks, and measurement methodologies for Internet and wireless experiments.
Significant emphasis will be put on security and network management issues
related to computer networks, as these are becoming increasingly important given
the growing number attacks and complexity of networks.  We focus both on 
existing technologies and on why some of them are not sufficient because of
technology trends or changes in fundamental assumptions. As an example, early
designers of Internet assumed cooperative behavior of end nodes. The state of
the art of millions of compromised hosts completely changes this assumption and
today's landscape on the Internet. We will read about 50 research papers on the
most recent topics of computer networking.

Students are expected to carry out a research project including analysis,
design, and implementation components when appropriate on a novel subject.  The
class projects can be any of the following types: algorithm design applied to
networked system, implementation of a novel networking system, measurement of
existing network protocols, and simulation of a proposed network algorithm. We
emphasize problems that are real and solutions that will make a difference,
ideally can be deployed.

The lecture will be conducted in an interactive
fashion. The instructors will lead the discussion for the first few meetings of the class, but
everyone must participate. For the remainder of the class, each
student (can be in groups) will present a paper. Students will read and review
papers before class.  You will be graded on reviews; class discussions; and
project scope, effort, and results.

### Prerequisites
Students are expected to have good programming skills and must have taken at
least one undergraduate-level systems-related course (from operating systems,
databases, distributed systems, and networking).

### Textbook
This course has no textbook. The class will select and discuss recent papers from the networking literature
in order to understand trends in networking research. 
Students will select papers, 
focusing primarily on SIGCOMM 2018 but also including Mobicom 2018, and NSDI 2019, and lead discussions.
If you can't find any interesting papers there, try older (but
still recent) SIGCOMM conferences, IMC, or [SIGCOMM Test-of-Time papers](https://www.sigcomm.org/awards/test-of-time-paper-award).

## Tentative Schedule and Reading List
Papers to be selected from but not limited to:
* [SIGCOMM'18](https://conferences.sigcomm.org/sigcomm/2018/program.html)
* [MobiCom'18](https://sigmobile.org/mobicom/2018/program.php)
* [NSDI'19](https://www.usenix.org/conference/nsdi19/technical-sessions)
* [MobiCom'19 (round 1)](https://www.sigmobile.org/mobicom/2019/accepted.php)


| Date  | Readings                       | Presenter|
| ------| -------------------------------| ---------| 
| Jan 10 | Introduction                   | Prof. Honeyman | 
|       | **Background**                 | Prof. Honeyman | 
| Jan 15| [Internet Anycast: Performance, Problems and Potential](http://www.cs.umd.edu/projects/droot/anycast_sigcomm18.pdf) | Prof. Honeyman |
|       | [Restructuring Endpoint Congestion Control](https://people.csail.mit.edu/alizadeh/papers/ccp-sigcomm18.pdf) | Prof. Honeyman | 
| Jan 17| [Networking across Boundaries: Enabling Communication through the Water-Air Interface](http://www.mit.edu/~fadel/papers/TARF-paper.pdf) | Prof. Honeyman | 
|				| [Polymorphic Radios: A New Design Paradigm for Ultra-Low Power Communication](https://people.cs.umass.edu/~dganesan/papers/SIGCOMM18-Polymorphic.pdf) | Prof. Honeyman | 
|       | **Networking for New Hardware** ||
| Jan 22| [Understanding PCIe Performance for End Host Networking](https://www.cl.cam.ac.uk/research/srg/netos/projects/pcie-bench/neugebauer2018understanding.pdf)| Prof. Honeyman |  
|				| [Revisiting Network Support for RDMA](https://people.eecs.berkeley.edu/~radhika/irn.pdf) | Prof. Honeyman | 
|       | **Measurement** ||
| Jan 24| [How to Catch when Proxies Lie Verifying the Physical Locations of Network Proxies with Active Geolocation](https://research.owlfolio.org/pubs/2018-catch-proxies-lie.pdf) | Reethika Ramesh | 
|       | [Incentivizing Censorship Measurements via Circumvention](https://censorbib.nymity.ch/pdf/Nisar2018a.pdf) | Ramakrishnan Sundara Raman | 
| Jan 29| [RF-Based 3D Skeletons](https://people.csail.mit.edu/mingmin/papers/rfpose3d-sigcomm-zhao.pdf)| Benjamin Cyr | 
|       | [NetChain: Scale-Free Sub-RTT Coordination](https://www.usenix.org/system/files/conference/nsdi18/nsdi18-jin.pdf)| Gefei  Zuo |
| Jan 31| **class is cancelled due to the severe weather** ||
|       | **Make Problem Complicated Again!** ||
| Feb 05| [Oboe: Auto-tuning Video ABR Algorithms to Network Conditions](https://engineering.purdue.edu/~isl/papers/sigcomm18-final128.pdf)| Jiachen	Sun|
|				| [Sincronia: near-optimal network design for coflows](http://www.cs.cornell.edu/~ragarwal/pubs/sincronia.pdf)|  Gefei  Zuo |
|       | **Combining Two old ideas into one new idea** || 
| Feb 07| [Salsify: Low-Latency Network Video through Tighter Integration between a Video Codec and a Transport Protocol](https://cs.stanford.edu/~keithw/salsify-paper.pdf) | Ben Reeves |
|       | [PASTE: A Network Programming Interface for Non-Volatile Main Memory](https://www.usenix.org/system/files/conference/nsdi18/nsdi18-honda.pdf)| Thomas Oliver |
| Feb 12| [AuTO: Scaling Deep Reinforcement Learning to Enable Datacenter-Scale Automatic Traffic Optimization](https://conferences.sigcomm.org/events/apnet2018/papers/auto.pdf)| Richard Higgins |
|       | [How Tracking Companies Circumvented Ad Blockers Using WebSockets](https://seclab.ccs.neu.edu/static/publications/bashir-imc18.pdf) | Eric Newberry|
|       | **Cool and practical systems** || 
| Feb 14| [Towards Battery-Free HD Video Streaming](https://batteryfreevideo.cs.washington.edu/files/batteryfreevideo.pdf)| Hsun-Wei	Cho |
|				| [A Measurement Study on Multi-path TCP with Multiple Cellular Carriers on High-speed Rails](https://www4.comp.polyu.edu.hk/~csdwang/Publication/SIGCOMM18-final.pdf)| Xumiao	Zhang|
| Feb 19| [FBOSS: Building Switch Software at Scale](https://research.fb.com/wp-content/uploads/2018/07/FBOSS-Building-Switch-Software-at-Scale.pdf?)|Kevin	Matthews|
|       | [Direct Universal Access: Making Data Center Resources Available to FPGA](https://www.microsoft.com/en-us/research/uploads/prod/2018/10/nsdi19spring-final64.pdf)| Jiacheng	Ma|
| Feb 21| [Improving TCP Congestion Control with Machine Intelligence](https://dl.acm.org/citation.cfm?id=3229543.3229550)| Richard	Higgins|
|				| [Copa: Practical Delay-Based Congestion Control for the Internet](https://www.usenix.org/system/files/conference/nsdi18/nsdi18-arun.pdf)| Can Carlak |
| Feb 26| [FreeFlow: Software-based Virtual RDMA Networking for Containerized Clouds](https://daehyeok.kim/assets/papers/FreeFlow-nsdi19_prepub.pdf)| Jiacheng	Ma|
|				| [403 Forbidden: A Global View of CDN Geoblocking](https://amcdon.com/papers/403forbidden-imc18.pdf)| Steven Sprecher |
| Feb 28| [Trident: Toward a Unified SDN Programming Framework with Automatic Updates](https://dl.acm.org/citation.cfm?doid=3230543.3230562)| Junpeng Guo |
|       | [Stateless Datacenter Load-balancing with Beamer](https://www.usenix.org/system/files/conference/nsdi18/nsdi18-olteanu.pdf)| Kai	Fang|
| Mar 05| Spring break | |
| Mar 07| Spring break | |
| Mar 12| [Inaudible Voice Commands: The Long-Range Attack and Defense](https://synrg.csl.illinois.edu/papers/lipread_nsdi18.pdf)| Hsun-Wei	Cho|
|				| [ECHO: A reliable distributed cellular core network for hyper-scale public clouds](https://www.flux.utah.edu/download?uid=276)| Jiayi	Liu|
| Mar 14| **mid-semester project progress presentation**| 6 brilliant groups!| 
|       | [Augmenting Physical Safety by Modifying Vehicular Networking Communication Methods](Slides/mid-1-Eric-Hsunwei-Richard.pdf) | Eric Newberry, Hsun-Wei Cho, and Richard Higgins | 
|       | [CCI-Bench: Measuring Cache Coherent Interconnection](Slides/mid-2-Jiacheng-Gefei.pdf) | Jiacheng Ma and Gefei Zuo | 
|       | [Live Container Migration without Dropping TCP Connections](Slides/mid-3-Thomas-Benjamin-Jiayi.pdf) | Thomas Oliver, Ben Reeves, and Jiayi Liu | 
|       | [Censored Planet](Slides/mid-4-Ram-Reethika-Steve.pdf) | Ramakrishnan Raman, Reethika Ramesh, and Steve Sprecher| 
|       | [Enabling Multi-device Collaboration Using Distributed Mobile Multipath](Slides/mid-5-Jiachen-Xumiao-Junpeng.pdf) | Xumiao Zhang, Jiachen Sun, and Junpeng Guo| 
|       | [Cross Layer Congestion Control in Cellular Networks](Slides/mid-6-Can-Zhensheng.pdf) | Can Carlak and Zhensheng Jing|
| Mar 19| [Sonata: Query-Driven Streaming Network Telemetry](https://dl.acm.org/citation.cfm?id=3230555) | Kai Fang |
|       | [Semi-Oblivious Traffic Engineering: The Road Not Taken](https://www.cs.cornell.edu/~jnfoster/papers/smore.pdf)| Junpeng Guo|
|       | **low latency, low latency, low latency**| | 
| Mar 21| **[RAVEN: Improving Interactive Latency for the Connected Car](http://leelabs.org/pubs/mobicom18_raven.pdf)** | Eric	Newberry |
|				| [On low-latency-capable topologies, and their impact on the design of intra-domain routing](https://dl.acm.org/citation.cfm?doid=3230543.3230575)| Zhensheng	Jiang |
| Mar 26| [MUTE: Bringing IoT to Noise Cancellation](https://synrg.csl.illinois.edu/papers/mute-sigcomm18.pdf)| Xumiao	Zhang|
| 			| [Chameleon: Scalable Adaptation of Video Analytics](http://people.cs.uchicago.edu/~junchenj/docs/Chameleon_SIGCOMM_CameraReady.pdf) | Jiachen Sun|
| Mar 28| [Slim: OS Kernel Support for a Low-Overhead Container Overlay Network](https://dada.cs.washington.edu/research/tr/2018/09/UW-CSE-18-09-06.pdf) | Ben Reeves |
|       | [Datacenter RPCs can be General and Fast](http://www.cs.cmu.edu/~akalia/doc/nsdi19/erpc_nsdi19.pdf) | Thomas Oliver | 
| Apr 02| [Resolving Policy Conflicts in Multi-Carrier Cellular Access](http://web.cs.ucla.edu/~zyuan/papers/mobicom18-yuan-multicarrier-authorversion.pdf)| Joseph Lee|
|				| [Leveraging Interconnections for Performance: The Serving Infrastructure of a Large CDN](https://www.net.in.tum.de/fileadmin/bibtex/publications/papers/p206-wohlfart.pdf)| Kevin	Matthews|
| Apr 04| [Advancing the Art of Internet Edge Outage Detection](https://www.akamai.com/us/en/multimedia/documents/technical-publication/advancing-the-art-of-internet-edge-outage-detection.pdf)| Reethika Ramesh|
|				| [Inferring Persistent Interdomain Congestion](http://cseweb.ucsd.edu/~snoeren/papers/congestion-sigcomm18.pdf)| Ramakrishnan Sundara Raman | 
| Apr 09| [Quack: Scalable Remote Measurement of Application-Layer Censorship](https://benvds.com/papers/quack-security18.pdf) | Steven Sprecher |
|				| [Homa: A Receiver-Driven Low-Latency Transport Protocol Using Network Priorities](https://people.csail.mit.edu/alizadeh/papers/homa-sigcomm18.pdf)| Can Carlark|
| Apr 11| [CAUDIT: Continuous Auditing of SSH Servers To Mitigate Brute-Force Attacks](https://www.usenix.org/system/files/nsdi19-cao.pdf) | Zhensheng	Jiang |
|				| [Correctness and Performance for Stateful Chained Network Functions](http://wisr.cs.wisc.edu/papers/chc.pdf) | Jiayi	Liu |
| Apr 16| **Final Poster presentation day** @  Tishman Hall 3:30-5pm | Everyone is invited! (pictures: [1](http://leelabs.org/images/eecs589/00-sky.JPG), [2](http://leelabs.org/images/eecs589/00-group.JPG), [3](http://leelabs.org/images/eecs589/00-team.JPG))|
|       | [Augmenting Physical Safety by Modifying Vehicular Networking Communication Methods](Slides/poster-1-Eric-Hsunwei-Richard.pdf) | [Eric Newberry, Hsun-Wei Cho, and Richard Higgins](http://leelabs.org/images/eecs589/1-Eric-Hsunwei-Richard.JPG) | 
|       | [CCI-Bench: Measuring Cache-Coherent Interconnection (Part of Project Optimus for FPGA Virtualization)](Slides/poster-2-Jiacheng-Gefei.pdf) | [Jiacheng Ma and Gefei Zuo](http://leelabs.org/images/eecs589/2-Jiacheng-Gefei.pdf.JPG) | 
|       | [Follow-me Connections: Seamless TCP Connection Migration](Slides/poster-3-Thomas-Benjamin-Jiayi.pdf) | [Thomas Oliver, Ben Reeves, and Jiayi Liu](http://leelabs.org/images/eecs589/3-Thomas-Benjamin-Jiayi.JPG) | 
|       | [Censored Planet: A Global Censorship Observatory](Slides/poster-4-Ram-Reethika-Steve.pdf) | [Ramakrishnan Raman, Reethika Ramesh, and Steve Sprecher](http://leelabs.org/images/eecs589/4-Ram-Reethika-Steve.JPG)| 
|       | [Enabling Multi-device Collaborations Using Distributed Mobile Multi-path](Slides/poster-5-Jiachen-Xumiao-Junpeng.pdf) | [Xumiao Zhang, Jiachen Sun, and Junpeng Guo](http://leelabs.org/images/eecs589/5-Jiachen-Xumiao-Junpeng.JPG)| 
|       | [Congestion Control by Leveraging LTE PHY-Layer Information](Slides/poster-6-Can-Zhensheng.pdf) | [Can Carlak and Zhensheng Jing](http://leelabs.org/images/eecs589/6-Can-Zhensheng.JPG)|
| Apr 18| IPv6 deep-dive study | Kevin Matthews|
|       | MPTCP deep-dive study | Kai Fang |
| Apr 23| [BBR TCP](http://www.potaroo.net/ispcol/2017-05/bbr.pdf)| Prof. Honeyman|


## Grading
Students who satisfactorily complete all assigned work will receive a B+ or better.

## Policies

### Honor Code
[The Engineering Honor Code](http://honorcode.engin.umich.edu/) applies to all activities related to this course.

### Groups
All activities of this course will be performed in **groups of 3 students**, two Master's students teamed up with one Doctoral student.
Exceptions may be made for valid reasons (e.g., working on existing projects)
once the instructor team approved.

[Declare your group's membership and paper preferences](https://goo.gl/forms/VuAkrqQqkSKgZEUn2) by January 16, 2019.
After this date, we will form groups from the remaining students.

### Paper Presentation
The course will be conducted as a seminar. 
Two students will present in each class.
Each student will be assigned to present a pair of papers at least twice
throughout the semester. 
Presentations should last **at most 45 minutes** without interruption.
However, presenters should expect questions and interruptions throughout. 
[You should sign-up for the desired presentation date
here](https://goo.gl/forms/sk0VOeKYxtfscjVy2).

In the presentation, you should:

* Motivate the paper and provide background.
* Present the high-level idea, approach, and/or insight (using examples, whenever appropriate). 
* Discuss technical details so that one can understand the key details without carefully reading it.
* Explain the difference between this paper and related work.
* Raise questions throughout the presentation to generate discussion.

### Paper Summaries
Every student is required to review the two papers assigned for each class.
One of these reviews can be brief, summarizing the main contributions of the paper and one critical assessment (e.g., how the paper could be improved, or compares to related work, or advances the state of the art).
This brief review should be about a paragraph in length. 

The second review should be up to one page long, explaining in detail the contributions and context of the paper.  This review
should address the following four questions in about a paragraph each.

* What is the problem addressed by the paper, and why is this problem important?
* What is the hypothesis of the work?
* What is the proposed solution, and what key insight guides their solution?
* What is one (or more) drawback or limitation of the proposal, and how will you improve it?

Reviews must be uploaded to **[https://hotcrp.eecs589.org](https://hotcrp.eecs589.org)**.
The list of papers can be found at [here](https://eecs589.eecs.umich.edu/search?q=) (note that you must sign up with umich.edu email). 

**Late reviews will not be counted.** 
You should use [this template](Summaries/Template.md) for writing your summary.
Allocate enough time for your reading, discuss as a group, write the summary carefully, and finally, include key observations from the class discussion.

You must read and review every assigned paper.

### Participation
You are expected to attend all lectures (you may skip up to 2 lectures for legitimate reasons), and more importantly, participate in class discussions.

### Project
You will complete substantive work an instructor-approved problem and have original contribution. 
Surveys are not permitted as projects; instead, each project must contain a survey of background and related work. 
You must meet the following milestones (unless otherwise specified in future announcements) to ensure a high-quality project at the end of the semester:

* Turn in a 2-page draft proposal (including references) by January 30. Remember to include the names and Michigan email addresses of the group members. 
* Keep revising your initial idea and incorporate instructor feedback. However, your team and project proposal must be finalized and approved on or before February 11.
* Each group must submit a 4-page mid-semester progress report and present mid-semester progress during class hours on the week of March 14.
* **Each group must prepare for 5 to 15 minutes presentation for mid-semester progress during class hours on March 14**.
* Each group must present their final results during a presentation or poster session on April 16.
* **Each group must turn in an 8-page final report and your code via email on or before 11:59PM EST on April 17.** The report must be submitted as a PDF file, with formatting similar to that of the papers you've read in the class. The self-contained (i.e., include ALL dependencies) code must be submitted as a zip file. Each zip file containing the code must include a README file with a step-by-step guide on how to compile and run the provided code.
* Format should be 3x4 feet (approximately 0.75x1.0 meters) poster and must be
  emailed to Joseph by 11:59pm EST April 15.

#### Acknowledgement
This course syllabus is heavily influenced by Mosharaf Chowdhury's [EECS 598](https://github.com/mosharaf/eecs598/blob/f17-bigdata/README.md).
