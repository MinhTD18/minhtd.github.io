---
title: Python Custom Formatting
author: MinhTD13
description: This blog post explains how to use Python's formatting mini-language to format strings and datetimes, as well as how to create custom formatting options for any object. It also provides an implementation for formatting geographic coordinates in various formats with different symbol options. 
published_date: 21 April, 2023 
---

# Python Custom Formatting

Python f-strings use a formatting mini-language, the same as the older .format() function. After the colon comes short specifications for how to format the value:

```python
>>> word = "Hello"
>>> f"{word:/^20}"
'///////Hello////////'
>>> amt = 12345678
>> f"{amt:20,}"
'          12,345,678'
```

Datetimes can use strftime syntax:

```python
>>> f"{now:%Y-%m on day %d}"
'2022-04 on day 14'
```

The reason datetime uses different formatting specs than strings is because datetime defines its own format method. Any object can define its own formatting mini-language. F-strings and .format() will use the format method on an object, and pass it the formatting directives being used:

```python
>>> class Confused:
...     def __format__(self, fmt):
...         return f"What is {fmt}?"
...
>>> c = Confused()
>>> f"{c:xyz12}"
'What is xyz12?'
```

Of course, format can be used for more useful formatting than Confused is doing...

Geographic latitude and longitude are conventionally presented in a few different formats: degrees; or degrees and minutes; or degrees, minutes and seconds. Then the numbers can have varying number of decimal places, and sometimes the units are represented by symbols.

Here’s an implementation of those possibilities in format. The format string starts with “d”, “dm”, or “dms” to indicate the basic format. The number of decimal places can be specified with “.N”. Finally, symbols can be added, either plain or fancy, by adding a quote or minute symbol:

```python
import dataclasses, re

@dataclasses.dataclass
class LatLong:
    lat: float
    long: float

    def __format__(self, fmt):
        dms, nfmt, opts = re.fullmatch(r"(dm?s?)([.\d]*)([′']?)", fmt).groups()
        formatted = []
        for num in [self.lat, self.long]:
            parts = []
            for ms in dms[1:]:
                parts.append(str(int(num)))
                num = abs((num - int(num)) * 60)
            parts.append(format(num, nfmt + "f"))
            syms = None
            if "'" in opts:
                syms = "°'\""
            elif "′" in opts:
                syms = "°′″"
            if opts:
                parts = [p + s for p, s in zip(parts, syms)]
            formatted.append(" ".join(parts))
        joined = ", ".join(formatted)
        return joined
>>> where = LatLong(42.359764937, -71.092068768)
>>> print(f"Location: {where:d'}")
Location: 42.359765°, -71.092069°
>>> print(f"Location: {where:d.4}")
Location: 42.3598, -71.0921
>>> print(f"Location: {where:dm'}")
Location: 42° 21.585896', -71° 5.524126'
>>> print(f"Location: {where:dms.4'}")
Location: 42° 21' 35.1538", -71° 5' 31.4476"
>>> print(f"Location: {where:dms.4}")
Location: 42 21 35.1538, -71 5 31.4476
>>> print(f"Location: {where:dms.6′}")
Location: 42° 21′ 35.153773″, -71° 5′ 31.447565″
>>> print("There: {:dms.6′}".format(where))
There: 42° 21′ 35.153773″, -71° 5′ 31.447565″
>>> print(format(where, "dms.6′"))
42° 21′ 35.153773″, -71° 5′ 31.447565″
```

This implementation doesn’t handle errors properly, but shows the basic idea. Also, lat/long are often shown with N/S E/W instead of positive and negative values. That’s left as an exercise for the reader.


<div style="text-align: right; font-size: xx-small;"> Published date: 21 April, 2023 </div>